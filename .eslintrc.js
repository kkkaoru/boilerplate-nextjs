/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'next/core-web-vitals',
    'plugin:jest/recommended',
    // 'prettier' needs to be bottom
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'max-lines': 'error',
    'max-depth': 'error',
    'max-lines-per-function': 'error',
    'react/jsx-props-no-spreading': 'off',
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  overrides: [
    {
      files: ['pages/*.page.tsx'],
      rules: {
        'react/function-component-definition': 'off',
      },
    },
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'react/function-component-definition': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/*.test.tsx'],
      rules: {
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        'max-lines': 'off',
        'max-depth': 'off',
        'max-lines-per-function': 'off',
      },
    },
  ],
};
