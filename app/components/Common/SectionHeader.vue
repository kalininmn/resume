<template>
  <div class="w-full text-center">
    <span class="block text-3xl text-[#FAFAFA] mb-2">
      {{ props.title }}
    </span>
    <span class="block text-[#A3A3A3]">{{ props.description }}</span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    refName?: string;
  }>(),
  {
    title: '',
    description: '',
    refName: '',
  },
);

defineExpose({
  refName: props.refName,
});
</script>
