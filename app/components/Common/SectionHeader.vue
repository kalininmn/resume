<template>
  <div class="w-full text-center">
    <span ref="titleRef" class="block text-3xl text-[#FAFAFA] mb-2">
      {{ props.title }}
    </span>
    <span ref="subTitleRef" class="block text-[#A3A3A3]">{{ props.description }}</span>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
CustomEase.create('myEase', '0.22, 1, 0.36, 1');

const props = withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    refName?: string;
  }>(),
  {
    title: '',
    description: '',
    refName: '',
  },
);

const titleRef = useTemplateRef('titleRef');
const subTitleRef = useTemplateRef('subTitleRef');
// const containerRef = useTemplateRef('containerRef');

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: titleRef.value, // Триггер — сам контейнер группы
      start: 'top 85%', // Анимация начнется, когда верх контейнера дойдет до 85% высоты экрана
      toggleActions: 'play none none none', // Проиграть один раз
    },
  });

  tl.from(titleRef.value, {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: 'myEase',
  })
    .from(subTitleRef.value, {
      opacity: 0,
      y: 30, // чуть меньше вылет для подзаголовка смотрится лучше
      duration: 1.2,
      ease: 'myEase',
    }, '-=0.8');
});

defineExpose({
  refName: props.refName,
});
</script>
