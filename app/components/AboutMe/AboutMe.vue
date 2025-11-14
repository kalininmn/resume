<template>
  <div class="flex justify-around">
    <div class="max-w-lg">
      <StatusBadge class="mb-5" opened />
      <p class="mb-2 text-base text-[#A3A3A3]">
        Привет, меня зовут <span class="text-[#fafafa]">Максим Калинин</span>
      </p>
      <span class="mb-1 text-4xl font-semibold text-[#fafafa]"
        >Senior Frontend Developer</span
      >
      <span class="text-base text-[#A3A3A3]">
        Специализируюсь на разработке масштабируемых<br />
        веб-приложений для финансового сектора. Опыт<br />
        создания высоконагруженных систем с более чем 44k<br />
        пользователей. Fullstack разработчик с глубокими<br />
        знаниями современного стека технологий.
      </span>

      <div class="flex mt-6">
        <AnimatedCounter class="mr-4" :sum="5" prefix=" +" title="Лет опыта" />
        <AnimatedCounter
          class="mr-4"
          :sum="44"
          prefix="к +"
          title="Пользователей"
        />
        <AnimatedCounter :sum="1500" prefix="к +" title="Систем" />
      </div>
    </div>

    <MePhoto />
  </div>
</template>

<script setup>
import StatusBadge from "./StatusBadge.vue";
import AnimatedCounter from "./AnimatedCounter.vue";
import MePhoto from "./MePhoto.vue";
</script>
