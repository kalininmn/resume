<template>
	<div class="w-fit py-1 px-4 rounded-lg text-base">
		{{ label }}
	</div>
</template>

<script setup lang="ts">
type Props = {
	label: string;
};
const { label } = defineProps<Props>();
</script>
