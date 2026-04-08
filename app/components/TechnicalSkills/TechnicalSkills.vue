<template>
	<div ref="techSkillsRef">
		<div class="navigator w-fit mx-auto grid gap-[12px] mb-15">
			<NavigatorItem
				label="Frontend"
				:actived="activeTab === SideList.Frontend"
				@click="setTab(SideList.Frontend)"
			/>
			<NavigatorItem
				label="Backend"
				:actived="activeTab === SideList.Backend"
				@click="setTab(SideList.Backend)"
			/>
			<NavigatorItem
				label="Инструменты"
				:actived="activeTab === SideList.Tools"
				@click="setTab(SideList.Tools)"
			/>
			<NavigatorItem
				label="Прочее"
				:actived="activeTab === SideList.Other"
				@click="setTab(SideList.Other)"
			/>
		</div>

		<div class="min-h-[272px] sm:min-h-[112px]">
			<SkillItems :items="Sides[activeTab]" :direction="direction" :active-tab="activeTab" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useAnimation } from '@/composables/useAnimation';
import { SideList, SideListMap, Sides } from './data';
import NavigatorItem from './NavigatorItem.vue';
import SkillItems from './SkillItems.vue';

const { fadeInUp } = useAnimation();

const oldTab = ref<SideList>(SideList.Frontend);
const activeTab = ref<SideList>(SideList.Frontend);

function setTab(tab: SideList) {
	oldTab.value = activeTab.value;
	activeTab.value = tab;
}

const direction = computed(() =>
	SideListMap[activeTab.value] > SideListMap[oldTab.value] ? 1 : -1,
);

const techSkillsRef = useTemplateRef<HTMLElement>('techSkillsRef');

onMounted(() => {
	fadeInUp(techSkillsRef.value as HTMLElement, {
		yDistance: 30,
		duration: 0.5,
		scroll: true,
	});
});
</script>

<style lang="scss" scoped>
.navigator {
	grid-template-columns: repeat(2, 1fr);
	justify-content: center;
	align-items: center;

	@media (min-width: 48rem) {
		grid-template-columns: repeat(4, min-content);
	}
}

:deep() {
	@import './dataStyle.scss';
}
</style>
