<template>
  <span :class="classes">{{ label }}</span>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  actived: {
    type: Boolean,
    default: false,
  },
});

const classes = computed(() => [
  'py-1',
  'px-2',
  'cursor-pointer',
  'pointer-events-auto',
  'font-medium',
  'text-sm',
  'inline-block',
  props.actived ? 'text-[#3A7BFF]' : 'text-[#FAFAFA]',
]);
</script>
