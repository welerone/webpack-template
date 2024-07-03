import globals from 'globals';
import pluginJs from '@eslint/js';
import { configs as tsConfigs } from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import jsxPlugin from 'eslint-plugin-react/configs/jsx-runtime.js';
import importPlugin from 'eslint-plugin-import-x';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...compat.config(importPlugin.configs.recommended),
  ...compat.config(importPlugin.configs.react),
  pluginJs.configs.recommended,
  ...tsConfigs.recommended,
  ...tsConfigs.stylistic,
  pluginReactConfig,
  // TODO: update config with React 19 release https://github.com/facebook/react/issues/28313#issuecomment-2076798972
  ...compat.config(reactHooksPlugin.configs.recommended),
  jsxPlugin,
  importPlugin.configs.typescript,
  {
    settings: {
      'import-x/resolver': {
        typescript: true,
      },
      'import-x/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
  {
    ignores: ['build/**', 'coverage/**'],
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
      'react/jsx-no-literals': 0,
      'import-x/extensions': [
        'error',
        'always',
        {
          ignorePackages: true,
        },
      ],
      'import-x/no-commonjs': 2,
      'import-x/no-named-as-default': 0,
    },
  },
  eslintConfigPrettier,
];
