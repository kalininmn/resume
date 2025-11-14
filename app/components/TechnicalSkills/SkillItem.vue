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
  "px-3",
  "rounded-lg",
  props.class,
  "text-xs",
]);
</script>
