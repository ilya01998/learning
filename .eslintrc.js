// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/comma-dangle': ['error', {
      'imports': 'never',
      'exports': 'never',
      'arrays': 'never',
      'objects': 'always',
    }],
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'semi': ['error', 'always'],
  },
};
