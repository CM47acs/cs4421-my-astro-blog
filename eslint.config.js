import eslintPluginAstro from "eslint-plugin-astro";

export default [
  {
    ignores: [".astro/**", "dist/**", "node_modules/**"],
  },
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
       "astro/no-set-text-directive": "error",
    },
  },
];
