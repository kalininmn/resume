import CheckIcon from '@/assets/icons/check.svg';

export const items = [
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
