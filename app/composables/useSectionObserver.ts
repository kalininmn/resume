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
	function goTo(section: Sections) {
		const targetElement = mapOfSectionsReverse[section];
		if (targetElement) {
			// Устанавливаем флаг прокрутки
			isScrolling.value = true;

			// Очищаем предыдущий таймер если есть
			if (scrollTimer) {
				clearTimeout(scrollTimer);
			}

			// Рассчитываем offset для корректной прокрутки с учетом rootMargin
			const offset = 300; // Соответствует вашему rootMargin bottom: -300px

			const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
			const adjustedPosition = elementTop - offset;

			window.scrollTo({
				top: adjustedPosition,
				behavior: 'smooth',
			});

			// Обновляем активную секцию сразу
			activeSection.value = section;

			// Сбрасываем флаг прокрутки через 1 секунду
			scrollTimer = setTimeout(() => {
				isScrolling.value = false;
			}, 1000);
		}
	}

	onMounted(() => {
		let sectionWeakMap = new WeakMap<Element, Sections>();

		const options: IntersectionObserverInit = {
			root: null,
			// rootMargin: '50% 0px -300px 0px',
			rootMargin: '0px 0px -300px 0px',
			threshold: 0.1,
		};
		const centerOfIntersectionArea = window.innerHeight - 150;

		const handleObserver: IntersectionObserverCallback = (entries) => {
			// Игнорируем события во время прокрутки
			if (isScrolling.value) return;

			// Находим все видимые секции
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
			// Очищаем предыдущие наблюдения
			observer?.disconnect();

			// Очищаем маппинг
			Object.keys(mapOfSectionsReverse).forEach((key) => {
				delete mapOfSectionsReverse[key as Sections];
			});

			// Создаем новый WeakMap для нового наблюдения
			sectionWeakMap = new WeakMap<Element, Sections>();

			sectionRefs.forEach((ref) => {
				if (ref.value.$el) {
					// mapOfSections.set(ref.value.$el, ref.value.refName);
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
