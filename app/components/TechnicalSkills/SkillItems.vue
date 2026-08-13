<template>
	<transition
		mode="out-in"
		:css="false"
		@before-enter="beforeEnter"
		@enter="onEnter"
		@leave="onLeave"
	>
		<div :key="activeTab" class="flex justify-center flex-wrap gap-2 mx-auto sm:max-w-lg">
			<SkillItem
				v-for="(item, i) in items"
				:key="i + activeTab"
				:label="item.label"
				:class="['skill-item', item.class]"
			/>
		</div>
	</transition>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import SkillItem from './SkillItem.vue';

type Props = {
	activeTab: string;
	items: { label: string; class: string }[];
	direction: -1 | 1;
};

const { activeTab, items, direction } = defineProps<Props>();

onMounted(() => {});
const onEnter = (el: Element, done: () => void) => {
	// Находим все чипы внутри вошедшего контейнера
	const chips = el.querySelectorAll('.skill-item');

	gsap.to(chips, {
		opacity: 1,
		x: 0,
		scale: 1,
		duration: 0.4,
		stagger: 0.1,
		onComplete: () => {
			gsap.set(chips, { clearProps: 'transform' });
			done();
		},
	});
};

const onLeave = (el: Element, done: () => void) => {
	const chips = el.querySelectorAll('.skill-item');

	gsap.to(chips, {
		opacity: 0,
		x: -direction * 30,
		duration: 0.2,
		stagger: 0.05,
		onComplete: done,
	});
};

const beforeEnter = (el: Element) => {
	const chips = el.querySelectorAll('.skill-item');
	gsap.set(chips, { opacity: 0, x: direction * 30, scale: 0.8 });
};
</script>

<style>
.skill-item {
	transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
	will-change: transform;
}

/* Анимация только для устройств с мышкой */
@media (hover: hover) {
	.skill-item:hover {
		/* scale: 1.02 + y: -8px */
		transform: translateY(-2px) scale(1.1);
	}
}

/* Эффект при нажатии (для мобилок и десктопа) */
.skill-item:active {
	transform: translateY(-2px) scale(1.1);
	transition-duration: 0.4s;
}
</style>
