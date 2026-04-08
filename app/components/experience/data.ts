import CheckIcon from '@/assets/icons/check.svg';

export const items = [
	{
		title: 'Senior developer',
		description: 'Совкомбанк Технологии',
		date: 'Август 2025 - Декабрь 2025',
		contentDescription: `Работа над высоконагруженным SPA «Рокетбанк, личный кабинет (Web-версия)»
    с фокусом на производительность и сложные UI-анимации.`,
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
		],
		stack: ['TypeScript', 'Vue 3', 'Pinia'],
	},
	{
		title: 'Middle developer',
		description: 'Совкомбанк Технологии',
		date: 'Февраль 2021 - Август 2025',
		contentDescription: `Разработка внутренней экосистемы управления ИТ-инфраструктурой
    (замена Pyrus и Confluence). 
    Система агрегирует данные из 1500+ систем банка, 44 000+ пользователей.`,
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
		],
		stack: [
			'JavaScript',
			'Vue 2',
			'Vuetify',
			'Vuelidate',
			'Vuex',
			'CASL',
			'Luxon',
			'Lodash',
			'Node.js',
			'Express.js',
			'Keycloack',
			'Memcached',
			'CI/CD (SSDLC)',
		],
	},
	{
		title: 'Middle developer',
		description: 'Полимебель',
		date: 'Октябрь 2017 - Февраль 2021',
		contentDescription: `Разработка и поддержка интернет-магазина (B2B) и внутренней системы управления заказами.`,
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
		stack: ['TypeScript', 'SSR (custom)', 'Node.js', 'PostgreSQL', 'K8S', 'NGINX'],
	},
];
