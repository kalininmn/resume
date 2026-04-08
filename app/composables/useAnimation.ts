import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CustomEase from 'gsap/CustomEase';

export const myEase = '0.22, 1, 0.36, 1';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
CustomEase.create('myEase', '0.22, 1, 0.36, 1');

export function useAnimation() {
	const fadeInUp = (
		element: HTMLElement,
		options: {
			delay?: number;
			duration?: number;
			yDistance?: number;
			scroll?: boolean;
			// onComplete?: () => void;
		} = {},
	) => {
		const { delay = 0, duration = 0.6, yDistance = 30, scroll = false } = options;

		gsap.from(element, {
			y: yDistance,
			opacity: 0,
			duration,
			delay,
			scrollTrigger: scroll
				? {
						trigger: element,
						start: 'top 65%',
						toggleActions: 'play none none none',
						once: true,
					}
				: null,
			ease: 'myEase',
		});
	};

	const staggerFadeInUp = (
		elements: HTMLElement[],
		options: {
			delay?: number;
			duration?: number;
			yDistance?: number;
			stagger?: number;
			scroll?: boolean;
			start?: string;
			onStart?: () => any;
			onComplete?: () => any;
		} = {},
	) => {
		const {
			delay = 0,
			duration = 0.6,
			yDistance = 30,
			stagger = 0.1,
			scroll = false,
			start = 'top 65%',
			onStart,
			onComplete,
		} = options;

		gsap.set(elements, { opacity: 0 });

		if (scroll) {
			ScrollTrigger.batch(elements, {
				start,
				once: true,
				onEnter: (batch) => {
					// batch — это массив элементов, которые зашли в область видимости одновременно
					gsap.fromTo(
						batch,
						{
							y: yDistance,
							opacity: 0,
						},
						{
							y: 0,
							opacity: 1,
							duration,
							delay,
							stagger: {
								each: stagger,
								onStart: onStart,
								onComplete: onComplete,
							},
							ease: 'myEase',
						},
					);
				},
				// Опционально: что делать при скролле вверх (повторить анимацию)
				// onLeaveBack: (batch) => {
				//   gsap.set(batch, { opacity: 0, y: 30, scale: 0.8 });
				// },
			});
		} else {
			gsap.fromTo(
				elements,
				{
					y: yDistance,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration,
					delay,
					stagger: {
						each: stagger,
						onStart: onStart,
					},
					ease: 'myEase',
				},
			);
		}
	};

	return {
		fadeInUp,
		staggerFadeInUp,
	};
}
