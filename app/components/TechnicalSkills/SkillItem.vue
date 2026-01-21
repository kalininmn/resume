<template>
  <div :class="classes">
    {{ props.label }}
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: '' },
  class: { type: String, default: '' },
});

const classes = computed(() => [
  'w-fit',
  'py-1',
  'px-4',
  'rounded-lg',
  props.class,
  'text-base',
]);
</script>

<style>
  
</style>
