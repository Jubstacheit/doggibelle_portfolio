import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import tailwind from "eslint-plugin-tailwindcss";
import js from "@eslint/js";
import ts from "typescript-eslint";


export default [
  // add eslint built-in
  js.configs.recommended,
  // add `typescript-eslint` flat config simply
  // if you would like use more another configuration,
  // see the section: https://typescript-eslint.io/getting-started#details
  ...ts.configs.recommended,
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReactConfig,
  ...tailwind.configs["flat/recommended"]
];