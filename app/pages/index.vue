<template>
  <Header class="mb-32.5" />
  <AboutMe class="mb-46.5" />

  <SectionHeader
    :ref="Sections.Experience"
    :ref-name="Sections.Experience"
    class="mb-10"
    title="Опыт работы"
    description="Профессиональный путь в разработке веб-приложений"
  />
  <Experience
    v-for="(item, index) in experienceItems"
    :data="item"
    :class="index < experienceItems.length - 1 ? 'mb-5' : 'mb-25'"
  />

  <SectionHeader
    :ref="Sections.Skills"
    class="mb-10"
    title="Технические навыки"
    description="Широкий спектр современных технологий и инструментов разработки"
  />
  <TechnicalSkills class="mb-23.5" />

  <SectionHeader
    :ref="Sections.Projects"
    class="mb-10"
    title="Проекты и задачи"
    description="Ключевые проекты и зоны ответственности"
  />
  <div class="grid grid-cols-3 gap-x-[20px] mb-23.5">
    <Projects v-for="item in projectItems" :data="item" />
  </div>

  <SectionHeader
    :ref="Sections.Contacts"
    class="mb-10"
    title="Контакты"
    description="Открыт для новых проектов и сотрудничества. Свяжитесь со мной для обсуждения проекта."
  />
  <div class="mb-25 text-center">
    <Link class="mr-10" :icon="MailIcon" text="Email" />
    <Link class="mr-10" :icon="GithubIcon" text="GitHub" />
    <Link :icon="TelegramIcon" text="Telegram" />
  </div>
  <p class="block text-center text-[#A3A3A3]">
    © 2025 Kalinin MN. Все права защищены.
  </p>
  <p class="block text-center text-[#A3A3A3]">
    Design by <a class="underline" href="#">Lazsido</a>
  </p>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Header from "~/components/Header/Header.vue";
import AboutMe from "~/components/AboutMe/AboutMe.vue";
import SectionHeader from "~/components/Common/SectionHeader.vue";
import Experience from "~/components/Experience.vue";
import TechnicalSkills from "~/components/TechnicalSkills/TechnicalSkills.vue";
import Projects from "~/components/Projects.vue";
import Link from "~/components/Common/Link.vue";

import CheckIcon from "@/assets/icons/check.svg";
import MailIcon from "@/assets/icons/mail.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TelegramIcon from "@/assets/icons/telegram.svg";

import { Sections, useSectionObserver } from "@/composables/useSectionObserver";

const experienceRef = useTemplateRef(Sections.Experience);
// const skillsRef = useTemplateRef(Sections.Skills);
// const projectsRef = useTemplateRef(Sections.Projects);
// const contactsRef = useTemplateRef(Sections.Contacts);

useSectionObserver([
  experienceRef,
  // skillsRef,
  // projectsRef,
  // contactsRef,
]);

const experienceItems = [
  {
    title: "Senior Full Stack Developer",
    description: "Крупный банк РФ",
    date: "2020 - Настоящее время",
    contentDescription:
      "Разработка масштабного агрегатора для внутренних и внешних систем банка на замену Pyrus и Confluence.",
    achievements: [
      { icon: CheckIcon, text: "Обработка более 1500 систем ежедневно" },
      { icon: CheckIcon, text: "Поддержка 44k + активных пользователей" },
      {
        icon: CheckIcon,
        text: "Разработка монитора оборудования с интеграцией VictoriaMetrics, Zabbix, Netbox",
      },
      {
        icon: CheckIcon,
        text: "Создание дизайн-системы и инфраструктуры с нуля",
      },
      { icon: CheckIcon, text: "Внедрение отказоустойчивой архитектуры" },
    ],
    stack: ["Vue 3", "TypeScript"],
  },
];

const projectItems = [
  {
    title: "Банковский агрегатор систем",
    description:
      "Масштабный агрегатор для внутренних и внешних систем банка на замену Pyrus и Confluence",
    badgeText: "Enterprice",
    achievements: [
      { icon: CheckIcon, text: "Обработка более 1500 систем ежедневно" },
      { icon: CheckIcon, text: "Поддержка 44k + активных пользователей" },
      {
        icon: CheckIcon,
        text: "Процессы интеграций, согласования, информационная безопасность",
      },
      // {
      //   icon: CheckIcon,
      //   text: "Создание дизайн-системы и инфраструктуры с нуля",
      // },
      { icon: CheckIcon, text: "Инфраструктура и отказоустойчивость" },
    ],
    stack: ["Vue 3", "TypeScript"],
  },
];
</script>
