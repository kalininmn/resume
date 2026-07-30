import {
	ref,
	onMounted,
	onUnmounted,
	watchEffect,
	type ComponentPublicInstance,
	type Ref,
} from 'vue';

export enum Sections {
	Experience = 'experience',
	Skills = 'skills',
	Projects = 'projects',
	Contacts = 'contacts',
}

const mapOfSectionsReverse: Partial<Record<Sections, Element | undefined>> = {};

const activeSection = ref<Sections | null>(Sections.Experience);
const isScrolling = ref(false);

let observer: IntersectionObserver | null = null;
let scrollTimer: ReturnType<typeof setTimeout> | null = null;

export function useSectionObserver(sectionRefs: Ref<ComponentPublicInstance | null>[] = []) {
	const offset = 100;

	function goTo(section: Sections) {
		const targetElement = mapOfSectionsReverse[section];
		if (targetElement) {
			isScrolling.value = true;

			if (scrollTimer) {
				clearTimeout(scrollTimer);
			}

			const scrollHeight = window.scrollY;
			const elementTop = targetElement.getBoundingClientRect().top

			window.scrollTo({
				top: scrollHeight + elementTop - offset,
				behavior: 'smooth',
			});

			activeSection.value = section;

			scrollTimer = setTimeout(() => {
				isScrolling.value = false;
			}, 1000);
		}
	}

	onMounted(() => {
		let sectionWeakMap = new WeakMap<Element, Sections>();

		const options: IntersectionObserverInit = {
			root: null,
			threshold: 0.1,
		};

		const handleObserver: IntersectionObserverCallback = (entries) => {
			if (isScrolling.value) return;

			const relevantEntries = entries.filter((entry) => {
				if (entry.isIntersecting) {
					const rect = entry.boundingClientRect;
					return rect.top > -100;
				}
				return false;
			});

			if (relevantEntries.length > 0) {
				const bestEntry = relevantEntries.reduce((best, current) => {
					const currentRect = current.boundingClientRect;
					const bestRect = best.boundingClientRect;

					const currentCenterDistance = Math.abs(
						(currentRect.top + currentRect.bottom) / 2 - window.innerHeight / 2,
					);
					const bestCenterDistance = Math.abs(
						(bestRect.top + bestRect.bottom) / 2 - window.innerHeight / 2,
					);

					return currentCenterDistance < bestCenterDistance ? current : best;
				});

				const section = sectionWeakMap.get(bestEntry?.target as Element);
				activeSection.value = section ?? null;
			}
		};

		observer = new IntersectionObserver(handleObserver, options);

		function observe() {
			observer?.disconnect();

			Object.keys(mapOfSectionsReverse).forEach((key) => {
				delete mapOfSectionsReverse[key as Sections];
			});

			sectionWeakMap = new WeakMap<Element, Sections>();

			sectionRefs.forEach((ref) => {
				if (ref.value.$el) {
					mapOfSectionsReverse[ref.value.refName as Sections] = ref.value.$el as Element;
					sectionWeakMap.set(ref.value.$el, ref.value.refName);
					observer!.observe(ref.value.$el);
				}
			});
		}

		watchEffect(() => {
			observe();
		});
	});

	onUnmounted(() => {
		// Обязательно отключаем наблюдатель при размонтировании компонента
		if (observer) {
			observer.disconnect();
			observer = null;
		}

		// Очищаем таймер если есть
		if (scrollTimer) {
			clearTimeout(scrollTimer);
		}
	});

	return { activeSection, goTo, isScrolling };
}
