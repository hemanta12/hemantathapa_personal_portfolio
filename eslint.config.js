import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default [
  // Base JS recommended rules
  js.configs.recommended,

  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        // Let TypeScript handle type checking — ESLint only checks JS logic
        project: null,
      },
      globals: {
        ...globals.browser,
        ...globals.es2020,
        // TypeScript provides JSX and React namespace globally
        JSX: "readonly",
        React: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    settings: { react: { version: "detect" } },
    rules: {
      // TypeScript
      ...tsPlugin.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "warn",

      // React
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/prop-types": "off",         // TypeScript handles prop types

      // React hooks
      ...reactHooksPlugin.configs.recommended.rules,

      // Accessibility
      ...jsxA11yPlugin.configs.recommended.rules,

      // Suppress JS-level undef for names TypeScript resolves
      "no-undef": "off",
    },
  },
];
