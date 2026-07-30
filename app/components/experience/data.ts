import CheckIcon from '@/assets/icons/check.svg';

export const items = [
	{
		title: 'Senior developer',
		description: 'Совкомбанк Технологии',
		date: 'Май 2026 - *',
		contentDescription: `Банк для бизнеса, B2B, B2C, B2E`,
		achievements: [
			{
				icon: CheckIcon,
				text: `Оптимизировал логику оформления депозитов для среднего и крупного бизнеса`,
			},
			{
				icon: CheckIcon,
				text: `Изучил новый стек.`,
			},
			{
				icon: CheckIcon,
				text: `Быстро влился в процессы команды.`,
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
		title: 'Senior developer',
		description: 'Совкомбанк Технологии',
		date: 'Август 2025 - Май 2026',
		contentDescription: `Работа над высоконагруженным SPA «Рокетбанк»
    с фокусом на производительность и сложные UI-анимации, B2C`,
		achievements: [
			{
				icon: CheckIcon,
				text: `Оптимизировал GitFlow для команды из 14 разработчиков:
        сократил количество конфликтов слияния на 70% и ускорил Delivery-процесс на 40%`,
			},
			{
				icon: CheckIcon,
				text: `Внедрил Scrum-практики, что стабилизировало график релизов и повысило
        прозрачность разработки.`,
			},
			{
				icon: CheckIcon,
				text: `Провёл масштабный рефакторинг и переход на единую архитектуру,
        ускоривший онбординг новых разработчиков.`,
			},
			{
				icon: CheckIcon,
				text: `Реализовал интеграцию партнёрских виджетов (чат поддержки).`,
			},
			{
				icon: CheckIcon,
				text: `Выполнили OKR по использованию ИИ.`,
			},
			{
				icon: CheckIcon,
				text: `Выполнили OKR по Time To Market.`,
			},
		],
		stack: ['Vue 3', 'Pinia', 'TypeScript', 'Vitest', 'Vite', 'SSDLC', 'CSS3'],
	},
	{
		title: 'Middle+ developer',
		description: 'Совкомбанк Технологии',
		date: 'Февраль 2021 - Август 2025',
		contentDescription: `Разработка внутренней экосистемы управления ИТ-инфраструктурой. 
    Система агрегирует данные из 1500+ систем банка, 44 000+ пользователей, B2E`,
		achievements: [
			{
				icon: CheckIcon,
				text: `Проектирование архитектуры Frontend и BFF (Backend for Frontend) уровней.`,
			},
			{
				icon: CheckIcon,
				text: `Разработка модуля мониторинга оборудования (VictoriaMetrics, Zabbix, Netbox).`,
			},
			{
				icon: CheckIcon,
				text: `Оптимизация производительности при обработке больших массивов данных.`,
			},
			{
				icon: CheckIcon,
				text: `Менторство, проведение Code Review, внедрение практик SSDLC в CI/CD.`,
			},
			{
				icon: CheckIcon,
				text: `Выполнили OKR по использованию ИИ.`,
			},
			{
				icon: CheckIcon,
				text: `Выполнили OKR по внедрению безопасных способов разработки.`,
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
	{
		title: 'Middle developer',
		description: 'Полимебель, B2B, B2E',
		date: 'Октябрь 2017 - Февраль 2021',
		contentDescription: `Разработка и поддержка B2B магазина и внутренней системы управления заказами.`,
		achievements: [
			{
				icon: CheckIcon,
				text: `Провел полный цикл от сбора бизнес-требований до системного анализа
        и проектирования архитектуры приложения «с чистого листа».`,
			},
			{
				icon: CheckIcon,
				text: `Разработал и внедрил масштабируемую дизайн-систему; 
        реализовал сложную верстку по Figma-макетам
        с использованием SSR (собственной реализации) для SEO-оптимизации`,
			},
			{
				icon: CheckIcon,
				text: `Спроектировал схему БД (PostgreSQL) и реализовал бизнес-логику на Node.js/Sequelize.`,
			},
			{
				icon: CheckIcon,
				text: `Настроил real-time обмен данными с 1С и внешними каталогами поставщиков (остатки, цены).`,
			},
			{
				icon: CheckIcon,
				text: `Полностью настроил окружение (VDS, NGINX) и внедрил контейнеризацию.
        Развернул кластер Kubernetes (K8S) с разделением на Staging/Production среды.`,
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
];
