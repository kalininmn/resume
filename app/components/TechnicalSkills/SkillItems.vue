<template>
  <div class="skill-items w-fit mx-auto">
    <template v-for="(group, groupIndex) in items" :key="groupIndex">
      <transition
        mode="out-in"
        :css="false"
        @before-enter="beforeEnter"
        @enter="onEnter"
        @leave="onLeave"
      >
        <div :key="activeTab" class="flex">
          <SkillItem
            v-for="item in group"
            :key="item.id"
            :data-index="item.id"
            :label="item.label"
            :class="item.class"
            class="skill-item m-1"
          />
        </div>
      </transition>
    </template>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import SkillItem from './SkillItem.vue';

const props = withDefaults(
  defineProps<{
    activeTab: string;
    items: { id: number; label: string; class: string }[];
    direction: number;
  }>(),
  {
    activeTab: '',
    items: () => [],
    direction: 0,
  },
);

onMounted(() => {});
const onEnter = (el, done) => {
  // Находим все чипы внутри вошедшего контейнера
  const chips = el.querySelectorAll('.skill-item');

  gsap.to(chips, {
    opacity: 1,
    x: 0,
    scale: 1,
    duration: 0.4,
    stagger: 0.1,
    ease: 'power2.out',
    onComplete: () => {
      gsap.set(chips, { clearProps: 'transform' });
      done();
    },
  });
};

const onLeave = (el, done) => {
  const chips = el.querySelectorAll('.skill-item');

  gsap.to(chips, {
    opacity: 0,
    x: -props.direction * 30,
    duration: 0.2,
    stagger: 0.05,
    onComplete: done,
  });
};

const beforeEnter = (el) => {
  const chips = el.querySelectorAll('.skill-item');
  gsap.set(chips, { opacity: 0, x: props.direction * 30, scale: 0.8 });
};
</script>

<style>
.skill-item {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

/* Анимация только для устройств с мышкой */
@media (hover: hover) {
  .skill-item:hover {
    /* scale: 1.02 + y: -8px */
    transform: translateY(-2px) scale(1.1);
  }
}

/* Эффект при нажатии (для мобилок и десктопа) */
.skill-item:active {
  transform: translateY(-2px) scale(1.1);
  transition-duration: 0.4s;
}
</style>
