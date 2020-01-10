module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'airbnb-base',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    // FIXME
    'import/no-unresolved': 0,
  }
}
