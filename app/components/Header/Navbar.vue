<template>
  <div>
    <NavItem
      class="m-1"
      label="Опыт"
      :actived="activeSection == Sections.Experience"
      @click="goTo(Sections.Experience)"
    />
    <NavItem
      class="m-1"
      label="Навыки"
      :actived="activeSection == Sections.Skills"
      @click="goTo(Sections.Skills)"
    />
    <NavItem
      class="m-1"
      label="Проекты"
      :actived="activeSection == Sections.Projects"
      @click="goTo(Sections.Projects)"
    />
    <NavItem
      class="m-1"
      label="Контакты"
      :actived="activeSection == Sections.Contacts"
      @click="goTo(Sections.Contacts)"
    />
  </div>
</template>

<script setup>
import NavItem from './NavItem.vue';

import { Sections, useSectionObserver } from '@/composables/useSectionObserver';

const { activeSection, goTo } = useSectionObserver();
</script>
