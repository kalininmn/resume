<template>
  <div class="text-left">
    <div class="text-2xl lg:text-3xl font-bold text-[#3A7BFF]">
      <span class="conter">{{ displayValue }}</span>
      <span>{{ prefix }}</span>
    </div>
    <span class="text-xs text-[#A3A3A3]">{{ title }}</span>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';

const props = defineProps({
  sum: {
    type: Number,
    required: true,
  },
  prefix: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
});

// Создаем реактивный объект для анимации
const tweenValue = ref(0);

// Округляем значение для вывода в шаблон
const displayValue = computed(() => Math.round(tweenValue.value));

const startAnimation = () => {
  gsap.to(tweenValue, {
    value: props.sum,
    duration: 2, // Длительность в секундах
    ease: 'power2.out', // Плавное замедление в конце
  });
};

defineExpose({
  startAnimation,
});

// onMounted(() => {
//   startAnimation(props.sum);
// });
</script>
