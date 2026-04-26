import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  nextPlugin.configs["core-web-vitals"],
];