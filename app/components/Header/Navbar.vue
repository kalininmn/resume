<template>
	<div>
		<NavItem class="m-1" label="Опыт" :actived="activeSection == Sections.Experience" />
		<NavItem class="m-1" label="Навыки" :actived="activeSection == Sections.Skills" />
		<NavItem class="m-1" label="Проекты" :actived="activeSection == Sections.Projects" />
		<NavItem class="m-1" label="Контакты" :actived="activeSection == Sections.Contacts" />
	</div>
</template>

<script setup>
import NavItem from './NavItem.vue';

import { Sections, useSectionObserver } from '@/composables/useSectionObserver';

const { activeSection } = useSectionObserver();

</script>