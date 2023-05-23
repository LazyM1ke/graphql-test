module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/no-namespace': ['off'],
    'react/prop-types': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'import/no-cycle': ['off'],

    'import/extensions': ['off'],
    'max-len': ['error', 240],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'arrow-body-style': ['off'],
    'no-use-before-define': ['off'],
    'react/jsx-props-no-spreading': ['warn'],
    'react/destructuring-assignment': ['off'],
    'no-restricted-syntax': ['off'],
    'no-plusplus': ['off'],
    '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],
    'no-shadow': ['off'],
    'react/react-in-jsx-scope': ['off'],

    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],

    'no-param-reassign': ['warn', { props: true, ignorePropertyModificationsForRegex: ['^draft'] }],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        children: { when: 'never' },
      },
    ],
    'react/require-default-props': ['off'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
