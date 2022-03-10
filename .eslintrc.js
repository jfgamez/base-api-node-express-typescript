module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint",
      "prettier"
    ],
    "extends": [
      "standard",
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "plugin:promise/recommended",
      "prettier",
    ],
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module",
    },
    "rules": {
    //   "no-console": 1,
    },
    "env": {
      "node": true
    }
  }