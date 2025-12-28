<template>
  <span :class="classes">
    {{ props.label }}
  </span>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: "" },
  class: { type: String, default: "" },
});

const classes = computed(() => [
  "w-fit",
  "inline-block",
  "py-1",
  "px-4",
  "rounded-lg",
  props.class,
  "text-base",
]);
</script>
