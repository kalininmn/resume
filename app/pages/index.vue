<template>
	<div class="mx-auto max-w-[1920px]">
		<Header />
		<!-- mt-32.5 Need add auto getting Header height for css properties -->
		<AboutMe class="mt-30.5 mb-40 md:mt-45.5 md:mb-46.5" />

		<SectionHeader
			:ref="Sections.Experience"
			:ref-name="Sections.Experience"
			class="mb-10"
			title="Опыт работы"
			description="Профессиональный путь в разработке веб-приложений"
		/>
		<Experience
			v-for="(item, index) in experienceItems"
			:key="index"
			:ref="(el) => setInstOfElement(el, index, experienceItemRefs)"
			:data="item"
			:class="index < experienceItems.length - 1 ? 'mb-5' : 'mb-25'"
		/>

		<SectionHeader
			:ref="Sections.Skills"
			:ref-name="Sections.Skills"
			class="mb-10"
			title="Технические навыки"
			description="Широкий спектр современных технологий и инструментов разработки"
		/>
		<TechnicalSkills class="mb-23.5" />

		<SectionHeader
			:ref="Sections.Projects"
			:ref-name="Sections.Projects"
			class="mb-10"
			title="Проекты и задачи"
			description="Ключевые проекты и зоны ответственности"
		/>
		<div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] mb-23.5">
			<Projects
				v-for="(item, index) in projectItems"
				:key="index"
				:ref="(el) => setInstOfElement(el, index, projectItemRefs)"
				:data="item"
			/>
		</div>

		<div>
			<SectionHeader
				:ref="Sections.Contacts"
				:ref-name="Sections.Contacts"
				class="mb-10"
				title="Контакты"
				description="Открыт для новых проектов и сотрудничества. Свяжитесь со мной для обсуждения проекта."
			/>
			<div class="flex justify-center flex-wrap gap-5 mb-25 text-center">
				<Link
					:ref="(el) => setElement(el, 0, contactItemRefs)"
					:icon="MailIcon"
					text="Email"
					class="link"
				/>
				<Link
					:ref="(el) => setElement(el, 1, contactItemRefs)"
					:icon="GithubIcon"
					text="GitHub"
					class="link"
				/>
				<Link
					:ref="(el) => setElement(el, 2, contactItemRefs)"
					:icon="TelegramIcon"
					text="Telegram"
					class="link"
				/>
			</div>
			<p :ref="(el) => (copyItemRefs[0] = el)" class="block text-center text-xs text-[#A3A3A3]">
				© 2025 Kalinin MN. Все права защищены.
			</p>
			<p :ref="(el) => (copyItemRefs[1] = el)" class="block text-center text-xs text-[#A3A3A3]">
				Design by <a class="underline" href="#">Lazsido</a>
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { onMounted, ref } from 'vue';
import Header from '~/components/Header/Header.vue';
import AboutMe from '~/components/AboutMe/AboutMe.vue';
import SectionHeader from '~/components/Common/SectionHeader.vue';
import Experience from '~/components/Experience.vue';
import TechnicalSkills from '~/components/TechnicalSkills/TechnicalSkills.vue';
import Projects from '~/components/Projects.vue';
import Link from '~/components/Common/Link.vue';

import MailIcon from '@/assets/icons/mail.svg';
import GithubIcon from '@/assets/icons/github.svg';
import TelegramIcon from '@/assets/icons/telegram.svg';

import { useAnimation } from '@/composables/useAnimation';
import { Sections, useSectionObserver } from '@/composables/useSectionObserver';
import { useRefs } from '@/composables/useRefs';

gsap.registerPlugin(ScrollTrigger);

const experienceRef = useTemplateRef(Sections.Experience);
const skillsRef = useTemplateRef(Sections.Skills);
const projectsRef = useTemplateRef(Sections.Projects);
const contactsRef = useTemplateRef(Sections.Contacts);

useSectionObserver([experienceRef, skillsRef, projectsRef, contactsRef]);
const { setInstOfElement, setElement } = useRefs();
const { staggerFadeInUp } = useAnimation();

const experienceItemRefs = ref([]);
const projectItemRefs = ref([]);
const contactItemRefs = ref([]);
const copyItemRefs = ref([]);

const projectItems = [
	{
		title: 'Личный кабинет Рокетбанка',
		description: '(Web-версия)',
		badgeText: 'Enterprice',
		achievements: [
			{
				icon: CheckIcon,
				text: `Реализация бизнес-фич,  и поддержка функционала личного кабинета (платежи, переводы, управление счетами).`,
			},
			{
				icon: CheckIcon,
				text: `Рефакторинг с упором на производительность и сложные UI-анимации.`,
			},
			{
				icon: CheckIcon,
				text: `Интеграция партнерских модулей без ущерба для UI/UX.`,
			},
		],
		stack: ['Vue 3', 'Pinia', 'JavaScript', 'TypeScript', 'Vitest', 'SSDLC', 'CSS3'],
	},
	{
		title: 'Полимебель',
		description: 'B2B-платформа для оптовых закупок фурнитуры',
		badgeText: 'Enterprice',
		achievements: [
			{
				icon: CheckIcon,
				text: `Сбор бизнес-требований и разработка архитектуры Frontend, Backend и БД (PostgreSQL).`,
			},
			{
				icon: CheckIcon,
				text: 'Реализация отказоустойчивого обмена данными с 1С и внешними API для обновления цен и остатков в режиме реального времени.',
			},
			{
				icon: CheckIcon,
				text: `Контейнеризация приложения, настройка NGINX и развертывание в кластере Kubernetes с разделением на Staging/Production окружения.`,
			},
		],
		stack: [
			'TypeScript',
			'SSR (custom)',
			'SCSS',
			'Node.js',
			'Express.js',
			'Sequelize',
			'PostgreSQL',
			'K8S',
			'Docker',
			'NGINX',
			'VDS',
			'Figma',
		],
	},
	{
		title: 'Внутренняя экосистема управления ИТ-инфраструктурой',
		description: 'Замена Pyrus и Confluence',
		badgeText: 'Enterprice',
		achievements: [
			{
				icon: CheckIcon,
				text: 'Сбор и консолидация информации из 1500+ разрозненных систем в единый интерфейс.',
			},
			{
				icon: CheckIcon,
				text: `Создание интерактивных дашбордов для мониторинга состояния ЦОД и серверных
        мощностей через интеграцию с VictoriaMetrics и Zabbix.`,
			},
			{
				icon: CheckIcon,
				text: `Поддержка стабильной работы 44 000+ активных пользователей
        с разграничением прав доступа любой сложности.`,
			},
		],
		stack: [
			'Vue 2',
			'Vue 3',
			'Vuetify',
			'Vuex',
			'Pinia',
			'JavaScript',
			'TypeScript',
			'VictoriaMetrics',
			'Zabbix',
			'Netbox',
			'CASL',
			'SSDLC',
		],
	},
];

onMounted(() => {
	staggerFadeInUp(
		experienceItemRefs.value.map((x) => x.$el),
		{
			yDistance: 30,
			duration: 0.5,
			scroll: true,
			onStart() {
				const targetEl = this.targets()[0];
				const component = experienceItemRefs.value.find((ref) => ref.$el === targetEl);

				if (component?.startAnimation) {
					component.startAnimation();
				}
			},
			onComplete() {
				gsap.set(
					experienceItemRefs.value.map((x) => x.$el),
					{ clearProps: 'transform' },
				);
			},
		},
	);

	staggerFadeInUp(
		projectItemRefs.value.map((x) => x.$el),
		{
			yDistance: 30,
			duration: 0.5,
			scroll: true,
			onStart() {
				const targetEl = this.targets()[0];
				const component = projectItemRefs.value.find((ref) => ref.$el === targetEl);

				if (component?.startAnimation) {
					component.startAnimation();
				}
			},
			onComplete() {
				gsap.set(
					projectItemRefs.value.map((x) => x.$el),
					{ clearProps: 'transform' },
				);
			},
		},
	);

	staggerFadeInUp(contactItemRefs.value, {
		start: 'top 85%',
		yDistance: 30,
		duration: 0.5,
		scroll: true,
		onComplete() {
			gsap.set(contactItemRefs.value, { clearProps: 'transform' });
		},
	});

	staggerFadeInUp(copyItemRefs.value, {
		start: 'top 95%',
		yDistance: 30,
		duration: 0.5,
		scroll: true,
	});
});
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
