<template>
  <div
    class="w-fit py-1 px-3 border border-[#404040] rounded-lg text-xs text-[#FAFAFA]"
  >
    {{ title }}
  </div>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		title?: string;
	}>(),
	{
		title: '',
	}
);
</script>
