module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react", "react-hook"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react-hook/exhaustive-deps": 1,
    "react-hook/rules-of-hooks": "error",
  },
};
