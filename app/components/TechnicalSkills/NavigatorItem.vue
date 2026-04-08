<template>
	<button :class="classes">
		{{ props.label }}
	</button>
</template>

<script setup>
const props = defineProps({
	label: {
		type: String,
	},
	actived: {
		type: Boolean,
		default: false,
	},
});

const classes = computed(() => [
	// 'w-fit',
	'px-[20px]',
	'py-[10px]',
	'rounded-[8px]',
	props.actived ? 'shadow-lg' : '',
	props.actived ? 'shadow-blue-500/20' : '',
	'text-base',
	props.actived ? 'text-white' : 'text-neutral-400',
	props.actived ? 'bg-[#3A7BFF]' : 'bg-neutral-800',
	'hover:bg-neutral-700',
	'cursor-pointer',
	'pointer-events-auto',
]);
</script>
