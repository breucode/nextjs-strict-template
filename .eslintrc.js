const confusingBrowserGlobals = require("confusing-browser-globals")

module.exports = {
  extends: [
    "plugin:unicorn/recommended",
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:security/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:@typescript-eslint/strict",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["promise", "react", "react-hooks", "@typescript-eslint", "unicorn"],
  parserOptions: {
    // enables the use of `import { a } from b` syntax. required for TypeScript imports
    sourceType: "module",

    project: "./tsconfig.json",
  },

  rules: {
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSEnumDeclaration",
        message: "enums are not allowed",
      },
    ],
    "no-restricted-globals": ["error", ...confusingBrowserGlobals],
    // Handled by typescript compiler options noUnusedLocals and noUnusedParameters
    "no-unused-vars": ["off"],
    "react/jsx-no-useless-fragment": [
      "error",
      {
        allowExpressions: true,
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "@tabler/icons",
            message: "Use @tabler/icons instead.",
          },
        ],
      },
    ],
    "@typescript-eslint/parameter-properties": [
      "error",
      {
        prefer: "parameter-property",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    // Disabled, because it forbids conditions on array access
    "@typescript-eslint/no-unnecessary-condition": ["off"],
    // Makes concatenating arrays unreadable
    "unicorn/prefer-spread": ["off"],
    "unicorn/filename-case": [
      "error",
      {
        case: "camelCase",
      },
    ],
  },
}
