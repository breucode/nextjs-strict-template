const confusingBrowserGlobals = require("confusing-browser-globals")

module.exports = {
  extends: [
    "plugin:unicorn/recommended",
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:security/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:functional/external-typescript-recommended",
    "plugin:functional/stylistic",
    "plugin:functional/no-other-paradigms",
    "plugin:functional/no-exceptions",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "promise",
    "react",
    "react-hooks",
    "@typescript-eslint",
    "unicorn",
    "functional",
  ],
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
    "react/jsx-curly-brace-presence": ["error"],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "@tabler/icons",
            message: "Use @tabler/icons-react instead.",
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
  overrides: [
    {
      files: ["src/pages/**/*.tsx"],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
          },
        ],
      },
    },
  ],
}
