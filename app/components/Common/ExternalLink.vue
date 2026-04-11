<template>
	<a :href="href" class="inline-flex align-center font-semibold text-white">
		<img :class="text ? 'mr-3' : ''" :src="icon" alt="" />
		{{ text }}
	</a>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		href?: string;
		icon?: string;
		text?: string;
	}>(),
	{
		href: '#',
		icon: '#',
	},
);
</script>
