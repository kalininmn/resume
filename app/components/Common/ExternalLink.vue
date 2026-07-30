<template>
	<a :href="href" target="_blank" rel="noopener" class="font-semibold text-white">
		<img :class="text ? 'mr-3' : ''" class="float-left" :src="icon" alt="" />
		{{ text }}
		<template v-if="subText">
			<br />
			<span class="font-light">{{ subText }}</span>
		</template>
	</a>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		href: string;
		icon: string;
		text?: string;
		subText?: string;
	}>(),
	{
		href: '#',
		icon: '#',
	},
);
</script>
