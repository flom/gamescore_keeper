# Gamescore Keeper

## Core Libraries and Frameworks

- [Vite](https://vitejs.dev)
- [PWA](https://github.com/antfu/vite-plugin-pwa)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v3](https://tailwindcss.com)
- [Prettier](https://prettier.io)
- [Prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) 
- [ESLint](https://eslint.org)
- [Vitest](https://vitest.dev/)
- [Cypress](https://www.cypress.io)
- [React Aria](https://react-spectrum.adobe.com/react-aria/index.html)

## Scripts

- `pnpm dev` - start a development server with hot reload.
- `pnpm build` - build for production. The generated files will be on the `dist` folder.
- `pnpm preview` - locally preview the production build.
- `pnpm test` - run unit and integration tests related to changed files based on git.
- `pnpm test:ci` - run all unit and integration tests in CI mode.
- `pnpm test:e2e` - run all e2e tests with the Cypress Test Runner.
- `pnpm test:e2e:headless` - run all e2e tests headlessly.
- `pnpm format` - format all files with Prettier.
- `pnpm lint` - runs TypeScript, ESLint and Stylelint.
- `pnpm validate` - runs `lint`, `test:ci` and `test:e2e:ci`.
