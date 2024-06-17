import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import jsxPlugin from "eslint-plugin-react/configs/jsx-runtime.js"
import eslintConfigPrettier from "eslint-config-prettier";
import reactHooksPlugin from "eslint-plugin-react-hooks";


export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  // TODO: update config with React 19 release https://github.com/facebook/react/issues/28313#issuecomment-2076798972
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
  jsxPlugin,
  {
    ignores: ["build/**"],
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node }, },
    settings: { react: { version: 'detect' }},
    rules: {
      'react/jsx-filename-extension': [2, { extensions: [".jsx", ".tsx"] }],
      'react/jsx-no-literals': 0,
    }
  },
  eslintConfigPrettier,
];