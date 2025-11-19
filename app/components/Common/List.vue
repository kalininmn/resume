<template>
  <div class="list">
    <span class="list__label block mb-1 text-[#A3A3A3]">{{ label }}</span>
    <ul class="list__items">
      <li v-for="item in items" class="list__item">
        <span class="text-base leading-6 align-top text-white">
          <img class="inline mr-[4px] w-[16px] h-[16px]" :src="item.icon" alt="">
          {{ item.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
