module.exports = {
  env: {
    browser: true,
    es2017: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'prefer-const': 'error',
    'no-unused-vars': ['error', { args: 'none' }],
    'no-var': 'error',
  },
};
