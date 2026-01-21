<template>
  <Card class="card">
    <CardHeader :title="data.title" :description="data.description">
      <template #prepend>
        {{ data.date }}
      </template>
    </CardHeader>

    <span class="block mb-2 text-white">{{ data.contentDescription }}</span>
    <List ref="listRef" class="mb-3" label="Достижения:" :items="data.achievements" />

    <div class="flex">
      <StackBadge
        v-for="(item, index) in data.stack"
        :key="index"
        :ref="el => setElement(el, index, itemRefs)"
        class="stack-bage mr-2"
        :title="item"
      />
    </div>
  </Card>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { useRefs } from '@/composables/useRefs';
// import { useAnimation } from '@/composables/useAnimation';

import Card from './Common/Card.vue';
import CardHeader from './Common/CardHeader.vue';
import List from './Common/List.vue';
import StackBadge from './Common/StackBadge.vue';

const { setElement } = useRefs();
// const { staggerFadeInUp } = useAnimation();

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

const listRef = useTemplateRef('listRef');
const itemRefs = ref([]);

function startAnimation() {
  // staggerFadeInUp()

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
.card {
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

/* Анимация только для устройств с мышкой */
@media (hover: hover) {
  .card:hover {
    /* scale: 1.02 + y: -8px */
    transform: translateY(-8px) scale(1.02);
  }
}

/* Эффект при нажатии (для мобилок и десктопа) */
.card:active {
  transform: translateY(-4px) scale(1.01);
  transition-duration: 0.2s;
}
</style>
