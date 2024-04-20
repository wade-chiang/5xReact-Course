module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2023,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'no-debugger': 0,
    'no-plusplus': 0,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': 0,
    'vue/v-on-event-hyphenation': 0,
  },
};
