module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'prettier'],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 0,
    'no-console': 0,
  },
};
