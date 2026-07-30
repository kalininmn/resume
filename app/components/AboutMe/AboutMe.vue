<script setup>
import { onMounted } from 'vue';
import StatusBadge from './StatusBadge.vue';
import AnimatedCounter from './AnimatedCounter.vue';
import MePhoto from './MePhoto.vue';

import { useAnimation } from '@/composables/useAnimation';

const { fadeInUp, staggerFadeInUp } = useAnimation();

const bage = useTemplateRef('bage');
const ami = useTemplateRef('ami');
const job = useTemplateRef('job');
const jobdesc = useTemplateRef('jobdesc');
const years = useTemplateRef('years');
const users = useTemplateRef('users');
const systems = useTemplateRef('systems');
const employers = useTemplateRef('employers');
const photoRef = useTemplateRef('photoRef');

onMounted(() => {
	fadeInUp(photoRef.value.$el, {
		yDistance: 50,
		duration: 0.6,
	});

	staggerFadeInUp(
		[
			bage.value.$el,
			ami.value,
			job.value,
			jobdesc.value,
			years.value.$el,
			users.value.$el,
			systems.value.$el,
			employers.value.$el,
		],
		{
			yDistance: 30,
			duration: 0.6,
			onStart() {
				const targetEl = this.targets()[0];
				const component = [years.value, users.value, systems.value, employers.value].find(
					(ref) => ref.$el === targetEl,
				);

				if (component?.startAnimation) {
					component.startAnimation();
				}
			},
			scroll: true,
		},
	);
});
</script>

<template>
	<div
		class="mx-auto flex flex-col items-center md:flex-row md:items-start md:justify-around md:max-w-5xl"
	>
		<div class="md:max-w-sm lg:max-w-md">
			<StatusBadge ref="bage" class="mb-5 gsap-reveal" opened />
			<p ref="ami" class="mb-2 text-base text-[#A3A3A3] gsap-reveal">
				Привет! Я <span class="text-[#fafafa]">Максим Калинин</span>
			</p>
			<span ref="job" class="inline-block mb-1 font-semibold text-[#fafafa] text-4xl gsap-reveal">
				Senior Frontend Developer
			</span>
			<span ref="jobdesc" class="inline-block text-base text-[#A3A3A3] gsap-reveal">
				Разрабатываю высоконагруженные SPA и внутренние экосистемы управления ИТ-инфраструктурой.<br />
				Специализируюсь на сложных структурах данных и архитектурных решениях с использованием Vue 3
				и TypeScript, имею опыт Fullstack-разработки.
			</span>

			<div class="flex flex-wrap justify-between mt-6 gap-4">
				<AnimatedCounter ref="years" class="gsap-reveal" :sum="8" prefix=" +" title="Лет опыта" />
				<AnimatedCounter ref="users" class="gsap-reveal" :sum="44" prefix="к +" title="Пользователей" />
				<AnimatedCounter ref="systems" class="gsap-reveal" :sum="1500" prefix="к +" title="Систем" />
				<AnimatedCounter ref="employers" class="gsap-reveal" :sum="200" prefix=" +" title="Человек в команде" />
			</div>
		</div>

		<MePhoto ref="photoRef" class="order-first mb-12 md:order-last md:mb-0" />
	</div>
</template>