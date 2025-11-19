<template>
  <div>
    <div
      class="
      navigator
      w-fit
      mx-auto
      grid
      grid-cols-2
      gap-[12px]
      md:grid-cols-4
      md:gap-x-[12px]
      mb-15"
    >
      <NavigatorItem
        label="Frontend"
        :actived="activeTab === SideList.Frontend"
        @click="activeTab = SideList.Frontend"
      />
      <NavigatorItem
        label="Backend"
        :actived="activeTab === SideList.Backend"
        @click="activeTab = SideList.Backend"
      />
      <NavigatorItem
        label="Инструменты"
        :actived="activeTab === SideList.Tools"
        @click="activeTab = SideList.Tools"
      />
      <NavigatorItem
        label="Прочее"
        :actived="activeTab === SideList.Other"
        @click="activeTab = SideList.Other"
      />
    </div>

    <div class="min-h-[96px]">
      <KeepAlive>
        <SkillItems :key="activeTab" :items="Sides[activeTab]" />
      </KeepAlive>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigatorItem from './NavigatorItem.vue';
import SkillItems from './SkillItems.vue';

const enum SideList {
  Frontend = 'frontend',
  Backend = 'backend',
  Tools = 'tools',
  Other = 'other',
}

const activeTab = ref<SideList>(SideList.Frontend);

const Sides: Record<SideList, { label: string; class: string }[]> = {
  [SideList.Frontend]: [
    { label: 'Vue', class: 'vue' },
    { label: 'Vuelidate', class: 'vuelidate' },
    { label: 'Vuetify', class: 'vuetify' },
    { label: 'Pinia', class: 'pinia' },
    { label: 'CASL', class: 'casl' },
    { label: 'CSS', class: 'css' },
    { label: 'SCSS', class: 'scss' },
    { label: 'JS', class: 'js' },
    { label: 'TS', class: 'ts' },
    { label: 'JSX', class: 'jsx' },
    { label: 'TSX', class: 'tsx' },
  ],
  [SideList.Backend]: [
    { label: 'Node.js', class: 'nodejs' },
    { label: 'Express.js', class: 'expressjs' },
    { label: 'PostgreSQL', class: 'postgresql' },
    { label: 'MongoDB', class: 'mongodb' },
    { label: 'MySQL', class: 'mysql' },
    { label: 'Redis', class: 'redis' },
    { label: 'Nginx', class: 'nginx' },
    { label: 'Sequlize', class: 'sequelize' },
  ],
  [SideList.Tools]: [
    { label: 'Webpack', class: 'webpack' },
    { label: 'Vite', class: 'vite' },
    { label: 'Git', class: 'git' },
    { label: 'Gitlab', class: 'gitlab' },
    { label: 'Docker', class: 'docker' },
    { label: 'CI/CD', class: 'cicd' },
  ],
  [SideList.Other]: [
    { label: 'Figma', class: 'figma' },
    { label: 'Vault', class: 'vault' },
    { label: 'Harbor', class: 'harbor' },
    { label: 'Passwork', class: 'passwork' },
  ],
};
</script>

<style lang="scss" scoped>
// .navigator {
//   grid-template-columns: repeat(4, min-content);
// }

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
