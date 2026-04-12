<script setup lang="ts">
import NavItem from './NavItem.vue';

// import { Sections, useSectionObserver } from '@/composables/useSectionObserver';
// import { useAnimation } from '@/composables/useAnimation';

const { activeSection, goTo } = useSectionObserver();
const { staggerFadeInUp } = useAnimation();

const nav1Ref = useTemplateRef('nav1Ref');
const nav2Ref = useTemplateRef('nav2Ref');
const nav3Ref = useTemplateRef('nav3Ref');
const nav4Ref = useTemplateRef('nav4Ref');

onMounted(() => {
	staggerFadeInUp([nav1Ref.value.$el, nav2Ref.value.$el, nav3Ref.value.$el, nav4Ref.value.$el], {
		duration: 0.6,
		yDistance: 50,
	});
});
</script>

<template>
	<div class="text-center">
		<NavItem
			ref="nav1Ref"
			class="m-1"
			label="Опыт"
			:actived="activeSection == Sections.Experience"
			@click="goTo(Sections.Experience)"
		/>
		<NavItem
			ref="nav2Ref"
			class="m-1"
			label="Навыки"
			:actived="activeSection == Sections.Skills"
			@click="goTo(Sections.Skills)"
		/>
		<NavItem
			ref="nav3Ref"
			class="m-1"
			label="Проекты"
			:actived="activeSection == Sections.Projects"
			@click="goTo(Sections.Projects)"
		/>
		<NavItem
			ref="nav4Ref"
			class="m-1"
			label="Контакты"
			:actived="activeSection == Sections.Contacts"
			@click="goTo(Sections.Contacts)"
		/>
	</div>
</template>
