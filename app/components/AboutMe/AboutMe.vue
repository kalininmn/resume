<template>
  <div
    class="
    mx-auto
    flex
    flex-col
    items-center
    md:flex-row
    md:items-start
    md:justify-around
    md:max-w-5xl
    "
  >
    <div class="md:max-w-sm lg:max-w-md">
      <StatusBadge ref="bage" class="mb-5" opened />
      <p ref="ami" class="mb-2 text-sm lg:text-base text-[#A3A3A3]">
        Привет, меня зовут <span class="text-[#fafafa]">Максим Калинин</span>
      </p>
      <span
        ref="job"
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
      <span ref="jobdesc" class="inline-block text-sm lg:text-base text-[#A3A3A3]">
        Специализируюсь на разработке масштабируемых<br class="hidden">
        веб-приложений для финансового сектора. Опыт<br class="hidden">
        создания высоконагруженных систем с более чем 44k<br class="hidden">
        пользователей. Fullstack разработчик с глубокими<br class="hidden">
        знаниями современного стека технологий.
      </span>

      <div class="flex justify-between mt-6">
        <AnimatedCounter
          ref="years"
          class="md:mr-4"
          :sum="5"
          prefix=" +"
          title="Лет опыта"
        />
        <AnimatedCounter
          ref="users"
          class="md:mr-4"
          :sum="44"
          prefix="к +"
          title="Пользователей"
        />
        <AnimatedCounter
          ref="systems"
          class=""
          :sum="1500"
          prefix="к +"
          title="Систем"
        />
      </div>
    </div>

    <MePhoto ref="photoRef" class="order-first md:order-last md:mb-0" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import StatusBadge from './StatusBadge.vue';
import AnimatedCounter from './AnimatedCounter.vue';
import MePhoto from './MePhoto.vue';

import { useAnimation } from '@/composables/useAnimation';

const { fadeInUp, staggerFadeInUp } = useAnimation();

const bage = useTemplateRef('bage');
const ami = useTemplateRef('ami');
const job = useTemplateRef('job');
const jobdesc = useTemplateRef('jobdesc');
const years = useTemplateRef('years');
const users = useTemplateRef('users');
const systems = useTemplateRef('systems');
const photoRef = useTemplateRef('photoRef');

onMounted(() => {
  fadeInUp(photoRef.value.$el, {
    yDistance: 50,
    duration: 0.6,
  });

  staggerFadeInUp([
    bage.value.$el,
    ami.value,
    job.value,
    jobdesc.value,
    years.value.$el,
    users.value.$el,
    systems.value.$el,
  ], {
    yDistance: 30,
    duration: 0.6,
    onStart() {
      const targetEl = this.targets()[0];
      const component
        = [years.value, users.value, systems.value]
          .find(ref => ref.$el === targetEl);

      if (component?.startAnimation) {
        component.startAnimation();
      }
    },
    scroll: true,
  });
});
</script>
