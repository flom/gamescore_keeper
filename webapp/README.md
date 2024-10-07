# GameScore Keeper

## Core Libraries and Frameworks

- [Vite](https://vitejs.dev)
- [PWA](https://github.com/antfu/vite-plugin-pwa)
- [React](https://reactjs.org)
- [React Router](https://reactrouter.com/en/main)
- [TypeScript](https://www.typescriptlang.org)
- [Zod Schema Validation](https://zod.dev/)
- [Tailwind CSS v3](https://tailwindcss.com)
- [Prettier](https://prettier.io)
- [Prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [ESLint](https://eslint.org)
- [Vitest](https://vitest.dev/)
- [Cypress](https://www.cypress.io)
- [Fontawesome Icons](https://fontawesome.com/search?o=r&m=free) `fa-solid`
- [shadcn/ui](https://ui.shadcn.com/)
- [react hook form](https://react-hook-form.com/docs/)

## Initial Setup

- `pnpm install`

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

## Misc

- `pnpm dlx shadcn-ui@latest add [component]`
- project structure based on https://github.com/alan2207/bulletproof-react/tree/master

## Docker

- `> docker buildx build --platform linux/amd64 -t nephazz/gamescore-keeper-frontend:linux .`