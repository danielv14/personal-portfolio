module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'semi': 'error',
    'quotes': [2, 'single', 'avoid-escape'],
    'no-undef': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/display-name': 'warn',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [2, { args: 'after-used', argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        'allowSingleExtends': true
      }
    ],
  },
};
