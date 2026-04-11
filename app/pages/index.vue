<template>
	<div class="mx-auto max-w-[1920px]">
		<app-header />
		<!-- mt-32.5 Need add auto getting Header height for css properties -->
		<about-me class="mt-30.5 mb-40 md:mt-45.5 md:mb-46.5" />

		<section-header
			:ref="Sections.Experience"
			:ref-name="Sections.Experience"
			class="mb-10"
			title="Опыт работы"
			description="Профессиональный путь в разработке веб-приложений"
		/>
		<experience />

		<section-header
			:ref="Sections.Skills"
			:ref-name="Sections.Skills"
			class="mb-10"
			title="Технические навыки"
			description="Широкий спектр современных технологий и инструментов разработки"
		/>
		<technical-skills class="mb-23.5" />

		<section-header
			:ref="Sections.Projects"
			:ref-name="Sections.Projects"
			class="mb-10"
			title="Проекты и задачи"
			description="Ключевые проекты и зоны ответственности"
		/>
		<projects />

		<div>
			<SectionHeader
				:ref="Sections.Contacts"
				:ref-name="Sections.Contacts"
				class="mb-10"
				title="Контакты"
				description="Открыт для новых проектов и сотрудничества. Свяжитесь со мной для обсуждения проекта."
			/>
			<app-footer />
		</div>
	</div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import SectionHeader from '@common/SectionHeader.vue';
import AppHeader from '@/components/header/AppHeader.vue';
import AboutMe from '@/components/aboutMe/AboutMe.vue';
import Experience from '@/components/experience/Experience.vue';
import TechnicalSkills from '@/components/technicalSkills/TechnicalSkills.vue';
import Projects from '@/components/projects/Projects.vue';
import AppFooter from '@/components/footer/AppFooter.vue';

gsap.registerPlugin(ScrollTrigger);

const experienceRef = useTemplateRef(Sections.Experience);
const skillsRef = useTemplateRef(Sections.Skills);
const projectsRef = useTemplateRef(Sections.Projects);
const contactsRef = useTemplateRef(Sections.Contacts);

useSectionObserver([experienceRef, skillsRef, projectsRef, contactsRef]);
</script>

<style scoped>
.link {
	transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
	will-change: transform;
}

/* Анимация только для устройств с мышкой */
@media (hover: hover) {
	.link:hover {
		/* scale: 1.02 + y: -8px */
		transform: translateY(-8px) scale(1.1);
	}
}

/* Эффект при нажатии (для мобилок и десктопа) */
.link:active {
	transform: translateY(-8px) scale(1.1);
	transition-duration: 0.4s;
}
</style>
