<template>
  <Card>
    <CardHeader :title="data.title" :description="data.description">
      <template #append>
        <StackBadge :title="data.badgeText" />
      </template>
    </CardHeader>

		<List label="Ключевые особенности:" :items="data.achievements"/>

		<hr class="my-7 text-[#404040]" />

    <div class="flex -m-1">
      <StackBadge v-for="item in data.stack" :title="item" class="m-1"/>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from "./Common/Card.vue";
import CardHeader from "./Common/CardHeader.vue";
import StackBadge from "./Common/StackBadge.vue";
import List from "./Common/List.vue";

defineProps<{
  data: {
    badgeText?: string;
    title?: string;
    description?: string;
		achievements?: Array<{ icon: string; text: string }>;
		stack?: string[];
  };
}>();
</script>