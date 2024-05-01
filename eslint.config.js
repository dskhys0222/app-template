import globals from "globals";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react/configs/jsx-runtime.js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import ts from "typescript-eslint";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  { ignores: ["dist"] },
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.strict,
  ...ts.configs.stylistic,
  react,
  {
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // react-hooks
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",
      // react-refresh
      "react-refresh/only-export-components": "warn",
    },
  },
  prettier,
];
