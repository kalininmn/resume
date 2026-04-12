<script setup lang="ts">
import gsap from 'gsap';
import PItem from './PItem.vue';
import { items } from './data';

const { setInstOfElement } = useRefs();
const { staggerFadeInUp } = useAnimation();
const projectItemRefs = ref([]);

onMounted(() => {
	staggerFadeInUp(
		projectItemRefs.value.map((x) => x.$el),
		{
			yDistance: 30,
			duration: 0.5,
			scroll: true,
			onStart() {
				const targetEl = this.targets()[0];
				const component = projectItemRefs.value.find((ref) => ref.$el === targetEl);

				if (component?.startAnimation) {
					component.startAnimation();
				}
			},
			onComplete() {
				gsap.set(
					projectItemRefs.value.map((x) => x.$el),
					{ clearProps: 'transform' },
				);
			},
		},
	);
});
</script>

<template>
	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] mb-23.5">
		<p-item
			v-for="(item, index) in items"
			:key="index"
			:ref="(el) => setInstOfElement(el, index, projectItemRefs)"
			:data="item"
		/>
	</div>
</template>
