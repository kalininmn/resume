<template>
	<div>
		<div class="text-3xl font-bold text-[#3A7BFF]">
			<span class="conter">{{ sum }}</span>
			<span>{{prefix}}</span>
		</div>
		<span class="text-xs text-[#A3A3A3]">{{ title }}</span>
	</div>
</template>

<script setup>
defineProps({
	sum: {
		type: Number,
		required: true,
	},
	prefix: {
		type: String,
		default: '',
	},
	title: {
		type: String,
		default: '',
	},
})
</script>