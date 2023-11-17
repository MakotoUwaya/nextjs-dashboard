import globals from 'globals';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import reactConfigRecommended from 'eslint-plugin-react/configs/recommended.js';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ['app/**/*.{ts,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
      react: pluginReact,
    },
    rules: {
      ...pluginTypeScript.configs['eslint-recommended'].rules,
      ...pluginTypeScript.configs['recommended'].rules,
      ...reactConfigRecommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
];
