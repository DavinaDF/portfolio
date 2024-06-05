// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   pluginReactConfig,
// ];

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
