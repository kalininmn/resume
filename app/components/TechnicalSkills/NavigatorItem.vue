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
  "w-fit",
  "py-1",
  "px-2",
  "rounded-md",
  "shadow-[0px 1px 3px 0px #0000001A]",
  "text-sm",
  "text-[#FAFAFA]",
  props.actived ? "bg-[#3A7BFF]" : "bg-[#3C3C4399]",
  "cursor-pointer",
  "pointer-events-auto",
]);
</script>
