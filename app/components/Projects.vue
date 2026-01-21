<template>
  <Card class="card">
    <CardHeader :title="data.title" :description="data.description">
      <template #append>
        <StackBadge :title="data.badgeText" class="stack-bage" />
      </template>
    </CardHeader>

    <List ref="listRef" label="Ключевые особенности:" :items="data.achievements" />

    <hr class="my-7 text-[#404040]">

    <div class="flex -m-1">
      <StackBadge
        v-for="(item, index) in data.stack"
        :key="index"
        :ref="el => setElement(el, index, itemRefs)"
        :title="item"
        class="m-1 stack-bage"
      />
    </div>
  </Card>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { useRefs } from '@/composables/useRefs';

import Card from './Common/Card.vue';
import CardHeader from './Common/CardHeader.vue';
import StackBadge from './Common/StackBadge.vue';
import List from './Common/List.vue';

const { setElement } = useRefs();

defineProps<{
  data: {
    badgeText?: string;
    title?: string;
    description?: string;
    achievements?: Array<{ icon: string; text: string }>;
    stack?: string[];
  };
}>();

const listRef = useTemplateRef('listRef');
const itemRefs = ref([]);

function startAnimation() {
  const tl = gsap.timeline();
  tl
    .call(() => {
      listRef.value?.startAnimation();
    })
    .fromTo(itemRefs.value,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.2,
        ease: 'power2.in',
        stagger: 0.15,
        onComplete() {
          gsap.set(itemRefs.value, { clearProps: 'transform' });
        },
      });
}

defineExpose({
  startAnimation,
});
</script>

<style>
.stack-bage {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

/* Анимация только для устройств с мышкой */
@media (hover: hover) {
  .stack-bage:hover {
    /* scale: 1.02 + y: -8px */
    transform: translateY(-2px) scale(1.1);
  }
}

/* Эффект при нажатии (для мобилок и десктопа) */
.stack-bage:active {
  transform: translateY(-2px) scale(1.1);
  transition-duration: 0.4s;
}
</style>
