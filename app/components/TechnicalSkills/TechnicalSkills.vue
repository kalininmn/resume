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

    <div class="min-h-[96px]">
      <SkillItems :items="Sides[activeTab]" :direction="direction" :active-tab="activeTab" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigatorItem from './NavigatorItem.vue';
import SkillItems from './SkillItems.vue';

import { useAnimation } from '@/composables/useAnimation';

const { fadeInUp } = useAnimation();

enum SideList {
  Frontend = 'frontend',
  Backend = 'backend',
  Tools = 'tools',
  Other = 'other',
}

enum SideListMap {
  frontend,
  backend,
  tools,
  other,
}

const oldTab = ref<SideList>(SideList.Frontend);
const activeTab = ref<SideList>(SideList.Frontend);

function setTab(tab: SideList) {
  oldTab.value = activeTab.value;
  activeTab.value = tab;
}

const direction = computed(() =>
  SideListMap[activeTab.value] > SideListMap[oldTab.value] ? 1 : -1,
);

const Sides: Record<SideList, { id: number; label: string; class: string }[]> = {
  [SideList.Frontend]: [
    [
      { id: 1, label: 'Vue', class: 'vue' },
      { id: 2, label: 'Vuelidate', class: 'vuelidate' },
      { id: 3, label: 'Vuetify', class: 'vuetify' },
      { id: 5, label: 'CASL', class: 'casl' },
    ],
    [
      { id: 4, label: 'Pinia', class: 'pinia' },
      { id: 6, label: 'CSS', class: 'css' },
      { id: 7, label: 'SCSS', class: 'scss' },
      { id: 8, label: 'JS', class: 'js' },
    ],
    [
      { id: 9, label: 'TS', class: 'ts' },
      { id: 10, label: 'JSX', class: 'jsx' },
      { id: 11, label: 'TSX', class: 'tsx' },
    ],
  ],
  [SideList.Backend]: [
    [
      { id: 12, label: 'Node.js', class: 'nodejs' },
      { id: 13, label: 'Express.js', class: 'expressjs' },
      { id: 14, label: 'PostgreSQL', class: 'postgresql' },
    ],
    [
      { id: 15, label: 'MongoDB', class: 'mongodb' },
      { id: 16, label: 'MySQL', class: 'mysql' },
      { id: 17, label: 'Redis', class: 'redis' },
    ],
    [
      { id: 18, label: 'Nginx', class: 'nginx' },
      { id: 19, label: 'Sequlize', class: 'sequelize' },
    ],
  ],
  [SideList.Tools]: [
    [
      { id: 20, label: 'Webpack', class: 'webpack' },
      { id: 21, label: 'Vite', class: 'vite' },
      { id: 22, label: 'Git', class: 'git' },
    ],
    [
      { id: 23, label: 'Gitlab', class: 'gitlab' },
      { id: 24, label: 'Docker', class: 'docker' },
    ],
    [
      { id: 25, label: 'CI/CD', class: 'cicd' },
    ],
  ],
  [SideList.Other]: [
    [
      { id: 26, label: 'Figma', class: 'figma' },
      { id: 27, label: 'Vault', class: 'vault' },
    ],
    [
      { id: 28, label: 'Harbor', class: 'harbor' },
    ],
    [
      { id: 29, label: 'Passwork', class: 'passwork' },
    ],
  ],
};

const techSkillsRef = useTemplateRef('techSkillsRef');

onMounted(() => {
  fadeInUp(techSkillsRef.value, {
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
}

@media (min-width: 48rem) {
  .navigator {
    grid-template-columns: repeat(4, min-content);
  }
}

:deep() {
  .vue {
    background-color: #35495e;
    color: #42b883;
    // box-shadow: 0 0 3px 1px currentColor;
  }
  .vuelidate {
    background-color: #35495e;
    color: #42b883;
    // box-shadow: 0 0 3px 1px currentColor;
  }
  .vuetify {
    background-color: rgba(33, 148, 243, 0.6);
    color: #2194f3;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .pinia {
    background-color: #50ad59;
    color: #ffc73b;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .casl {
    background-color: #fff;
    color: #000;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .css {
    background-color: #27a3d9;
    color: #fff;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .scss {
    background-color: #c76395;
    color: #fff;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .js {
    background-color: #f7de1e;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .ts {
    background-color: #3178c6;
    color: #fff;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .jsx {
    background: linear-gradient(0.3turn, #eed849 55%, #8651a3 45%);
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  // .jsx:first-child {
  //   color: #2e302d;
  //   // font-weight: 500;
  // }
  // .jsx:last-child {
  //   padding-left: 5px;
  // }
  .tsx {
    background: linear-gradient(0.3turn, #3178c6 55%, #8651a3 45%);
    color: #fff;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  // .tsx:first-child {
  //   color: #2e302d;
  // }
  // .tsx:last-child {
  //   padding-left: 5px;
  // }
  .webpack {
    background-color: #1a75bb;
    color: #8acff3;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .vite {
    background: linear-gradient(100deg, #56aff8, #9d57f7);
    // background-color: #9d57f7;
    color: #f8c420;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .git {
    background-color: #eb4d31;
    // color: #3f2e00;
    color: #fff;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .gitlab {
    background: linear-gradient(to bottom, #db4127 40%, transparent 60%),
      linear-gradient(to right, #f5680d 20%, transparent 60%),
      linear-gradient(to left, #f5680d 20%, transparent 60%),
      linear-gradient(to top, #f89a1a 40%, transparent 60%);
    color: #fff;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .docker {
    background-color: #1d60e7;
    color: #f8f8f8;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .cicd {
    background: linear-gradient(0.3turn, #f86405 44%, #f8a30d 44%);
    // background-color: #1a75bb;
    color: #fff;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .nodejs {
    background: linear-gradient(0.3turn, #73af5b 40%, #3b813b 60%);
    // background-color: #1a75bb;
    color: #333333;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .expressjs {
    background: linear-gradient(0.3turn, #73af5b 40%, #3b813b 60%);
    // background-color: #1a75bb;
    color: #333333;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .postgresql {
    background-color: #32648d;
    color: #f8f8f8;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .mongodb {
    background: linear-gradient(0.3turn, #0ea54d 40%, #118e4d 60%);
    color: #20303a;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .mysql {
    background: linear-gradient(90deg, #00728b 43%, #eb8d0f 43%);
    // color: #20303a;
    color: #f8f8f8;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .redis {
    background: linear-gradient(#d22b1e 30%, #9f1d0f 70%);
    // color: #20303a;
    color: #f8f8f8;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .nginx {
    // background: linear-gradient(#d22b1e 30%, #9f1d0f 70%);
    background-color: #009139;
    // color: #20303a;
    color: #f7f7f7;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .sequelize {
    background: linear-gradient(90deg, #00abe9 10%, #2276b8 40%, #2d3e67);
    // background-color: #009139;
    // color: #20303a;
    color: #f7f7f7;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .figma {
    background: linear-gradient(
      to right,
      #f24e1e 20%,
      #ff7262 40%,
      #a259ff 60%,
      #1abcfe 80%,
      #0acf83
    );
    // background-color: #009139;
    // color: #20303a;
    color: #f7f7f7;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .vault {
    background-color: #ffd814;
    // color: #20303a;
    color: #000000;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .harbor {
    background: linear-gradient(90deg, #5db13d, #52a432);
    // background-color: #52a432;
    // color: #20303a;
    color: #f3f5f8;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
  .passwork {
    background-color: #2c82c9;
    // color: #20303a;
    color: #ffffff;
    // font-weight: 500;
    // box-shadow: 0px 0px 3px 1px currentColor;
  }
}
</style>
