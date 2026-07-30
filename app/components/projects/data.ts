import CheckIcon from '@/assets/icons/check.svg';

export const items = [
	{
		title: 'Кредитно Инвестиционный Бизнес, B2B, B2C, B2E',
		description: 'Банк для бизнеса',
		badgeText: 'Enterprice',
		achievements: [
			{
				icon: CheckIcon,
				text: `Миграция монолита на микрофронты.`,
			},
			{
				icon: CheckIcon,
				text: `Ревью, рефакторинг.`,
			},
			{
				icon: CheckIcon,
				text: `Проработка тех-долга, разработка бизнес-фич.`,
			},
		],
		stack: [
			'React',
			'Yup',
			'React-hook-form',
			'Tanstack Query',
			'Tanstack Router',
			'Zustand',
			'Typescript',
			'Module Federation',
			'Vitest',
			'Webpack',
			'Vite',
			'SCSS',
			'SSDLC',
		],
	},
	{
		title: 'Рокетбанк, B2C',
		description: 'Мобильный банк',
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
		stack: ['Vue 3', 'Pinia', 'TypeScript', 'Vitest', 'Vite', 'SSDLC', 'CSS3'],
	},
	{
		title: 'Полимебель, B2B, B2E',
		description: 'Платформа для оптовых закупок фурнитуры',
		badgeText: 'Mid-Market',
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
		title: 'IT-Landscape, B2E',
		description: 'Экосистема управления ИТ-инфраструктурой',
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
			'Webpack',
			'Vite',
			'VictoriaMetrics',
			'Zabbix',
			'Netbox',
			'CASL',
			'SSDLC',
		],
	},
];
