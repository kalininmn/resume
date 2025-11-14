<template>
  <Card>
    <CardHeader :title="data.title" :description="data.description">
      <template #prepend>
        {{ data.date }}
      </template>
    </CardHeader>

    <span class="block mb-2 text-white">{{ data.contentDescription }}</span>
    <List class="mb-3" label="Достижения:" :items="data.achievements" />

    <div class="flex">
      <StackBadge class="mr-2" v-for="item in data.stack" :title="item" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from "./Common/Card.vue";
import CardHeader from "./Common/CardHeader.vue";
import List from "./Common/List.vue";
import StackBadge from "./Common/StackBadge.vue";

defineProps<{
  data: {
    title?: string;
    description?: string;
    date?: string;
    contentDescription?: string;
    achievements?: Array<{ icon: string; text: string }>;
    stack?: string[];
  };
}>();
</script>
