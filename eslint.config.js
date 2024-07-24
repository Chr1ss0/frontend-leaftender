import { defineConfig } from "eslint-define-config"

export default defineConfig({
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential", // oder 'plugin:vue/recommended' für Vue 2
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  rules: {
    "vue/singleline-html-element-content-newline": "error",
    "prettier/prettier": "error",
  },
})
