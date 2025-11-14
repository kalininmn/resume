<template>
  <div class="inline-flex items-center px-3 py-1 border rounded-lg border-[#27C840] text-xs text-[#27C840] bg-[#27C8404D]">
    <img class="mr-[4px]" size="10" :src="StarIcon">
    <span class="font-medium text-xs">{{ opened ? 'Открыт для предлоежний' : 'Закрыт для предложений' }}</span>
  </div>
</template>

<script setup>
import StarIcon from '@/assets/icons/star.svg';

defineProps({
  opened: {
    type: Boolean,
    default: false,
  },
});
</script>
