<template>
  <div class="header flex mb-4">
    <div class="header__info">
      <div class="mb-3">
        <slot name="append" />
      </div>
      <div class="header__title mb-2 font-semibold text-[#FAFAFA]">
        {{ title }}
      </div>
      <div class="header__description text-[#A3A3A3]">
        {{ description }}
      </div>
    </div>

    <div class="ml-auto text-[#A3A3A3]">
      <slot name="prepend" />
    </div>
  </div>
</template>

<script setup>
const { title, description } = defineProps({
  title: { type: String },
  description: { type: String },
});
</script>
