// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import stylistic from '@stylistic/eslint-plugin';

export default withNuxt(
  // Your custom configs here
  // {
  //   plugins: {
  //     "@stylistic": stylistic,
  //   },
  // },
  stylistic.configs.customize({
    semi: true,
    quotes: 'single',
  }),
  {
    // files: ['**/*.vue'],
    rules: {
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 1,
        },
      }],
      '@stylistic/max-len': ['error', 100],
      '@stylistic/no-tabs': 'off',
    },
  },
);
