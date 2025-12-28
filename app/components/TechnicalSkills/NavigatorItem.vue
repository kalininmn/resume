<template>
  <button :class="classes">
    {{ props.label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  actived: {
    type: Boolean,
    default: false,
  },
});

const classes = computed(() => [
  // 'w-fit',
  'px-[20px]',
  'py-[10px]',
  'rounded-[8px]',
  'shadow-lg',
  'shadow-blue-500/20',
  'text-sm',
  props.actived ? 'text-white' : 'text-neutral-400',
  'font-medium',
  props.actived ? 'bg-[#3A7BFF]' : 'bg-neutral-800',
  'hover:bg-neutral-700',
  'cursor-pointer',
  'pointer-events-auto',
]);
</script>
