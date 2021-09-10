module.exports = {
  root: true,
  env: {
    node: true,
    'jest/globals': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    'eslint:recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/(*.)+(spec|test).[jt]s?(x)'
      ]
    }
  ]
}
