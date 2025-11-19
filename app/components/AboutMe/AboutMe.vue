<template>
  <div
    class="
    flex
    flex-col
    items-center
    md:flex-row
    md:justify-between
    md:items-start
    md:justify-around"
  >
    <div class="md:max-w-sm lg:max-w-lg">
      <StatusBadge class="mb-5" opened />
      <p class="mb-2 text-sm lg:text-base text-[#A3A3A3]">
        Привет, меня зовут <span class="text-[#fafafa]">Максим Калинин</span>
      </p>
      <span
        class="
        inline-block
        mb-1
        font-semibold
        text-[#fafafa]
        text-xl
        md:text-3xl
        lg:text-4xl"
      >
        Senior Frontend Developer
      </span>
      <span class="text-sm lg:text-base text-[#A3A3A3]">
        Специализируюсь на разработке масштабируемых<br class="hidden">
        веб-приложений для финансового сектора. Опыт<br class="hidden">
        создания высоконагруженных систем с более чем 44k<br class="hidden">
        пользователей. Fullstack разработчик с глубокими<br class="hidden">
        знаниями современного стека технологий.
      </span>

      <div class="flex justify-between mt-6">
        <AnimatedCounter
          class="order-last md:mr-4"
          :sum="5"
          prefix=" +"
          title="Лет опыта"
        />
        <AnimatedCounter
          class="md:mr-4"
          :sum="44"
          prefix="к +"
          title="Пользователей"
        />
        <AnimatedCounter
          class="order-first"
          :sum="1500"
          prefix="к +"
          title="Систем"
        />
      </div>
    </div>

    <MePhoto class="mb-3 order-first md:order-last md:mb-0" />
  </div>
</template>

<script setup>
import StatusBadge from './StatusBadge.vue';
import AnimatedCounter from './AnimatedCounter.vue';
import MePhoto from './MePhoto.vue';
</script>
