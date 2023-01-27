This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with the following options:

```shell
--typescript
--eslint
--src-dir
```

Some plugins were added to force a consistent and strict code style.

[Prettier](https://prettier.io/) is used for formattig.

The following plugins and rulesets for eslint:

- [unicorn/recommended](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint:recommended](https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js)
- [promise/recommended](https://github.com/eslint-community/eslint-plugin-promise)
- [security/recommended](https://github.com/eslint-community/eslint-plugin-security)
- [eslint-comments/recommended](https://github.com/eslint-community/eslint-plugin-eslint-comments)
- [typescript-eslint/strict](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/strict.ts)
- [react/recommended](https://github.com/jsx-eslint/eslint-plugin-react)
- [react-hooks/recommended](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [confusingBrowserGlobals](https://github.com/facebook/create-react-app/tree/main/packages/confusing-browser-globals)

The following compiler options for typescript were added:

```shell
noUnusedLocals
noUnusedParameters
noFallthroughCasesInSwitch
```

Additionally, a few custom rules were added to fit my code style and prevent conflicts.

You can use [Lefthook](https://github.com/evilmartians/lefthook) to run all checks as a pre-commit hook.
Just run `lefthook install` and you are good to go.

Some additional scripts were added to make things a bit easier:

`yarn formatCheck` checks the formatting of your files.

`yarn formatFix` fixes the formatting of your files.

`yarn export` runs the static html export for nextjs.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
