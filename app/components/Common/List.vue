<template>
	<div class="list">
		<span class="list__label block mb-1 text-[#A3A3A3]">{{ label }}</span>
		<ul class="list__items">
			<li
				v-for="(item, index) in items"
				:key="index"
				:ref="(el) => setInstOfElement(el, index, itemRefs)"
				class="list__item"
			>
				<span class="text-base leading-6 align-top text-white">
					<img class="inline mr-[4px] w-[16px] h-[16px]" :src="item.icon" alt="" />
					{{ item.text }}
				</span>
			</li>
		</ul>
	</div>
</template>

<script setup>
import gsap from 'gsap';
import { useRefs } from '@/composables/useRefs';
import { myEase } from '@/composables/useAnimation';

defineProps({
	label: {
		type: String,
		default: '',
	},
	items: {
		type: Array,
		default: () => [],
	},
});

const { setInstOfElement } = useRefs();
const itemRefs = ref([]);

function startAnimation() {
	console.log(itemRefs.value);
	gsap.from(itemRefs.value, {
		y: 50,
		opacity: 0,
		duration: 1.2,
		ease: myEase,
		stagger: 0.1,
	});
}

defineExpose({
	startAnimation,
});
</script>
