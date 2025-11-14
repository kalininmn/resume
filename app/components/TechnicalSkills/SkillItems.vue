<template>
  <div class="skill-items w-fit mx-auto">
    <template v-for="(item, index) in items">
      <SkillItem :label="item.label" :class="item.class" class="m-1" />
      <br v-if="(index + 1) % Math.ceil(items.length / 3) == 0" />
    </template>
  </div>
</template>

<script setup lang="ts">
import SkillItem from "./SkillItem.vue";

withDefaults(
	defineProps<{
		items: {label: string; class: string}[];
	}>(),
	{
		items: () => [],
	}
);
</script>
