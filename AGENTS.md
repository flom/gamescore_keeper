# AGENTS.md

Game Score Keeper: PocketBase backend (`pocketbase/`) + Vite/React PWA frontend (`webapp/`).
There is no monorepo tooling — each directory is independent. **Almost all dev work happens in `webapp/`. Run frontend commands from `webapp/`, not the repo root.**

## Commands (run in `webapp/`)

- Package manager is **pnpm** (`pnpm-lock.yaml`). Do not use npm/yarn.
- `pnpm dev` — dev server on port 3000, proxies `/api` -> PocketBase at `http://127.0.0.1:8090` (see `vite.config.mts`).
- `pnpm lint` — runs tsc + eslint(--fix) + stylelint(--fix) in parallel. Use this for typecheck/lint.
- `pnpm test` — vitest in watch mode (related to changed files); `pnpm test:ci` runs all once.
- `pnpm test:e2e:headless` — Cypress e2e against a preview build.
- `pnpm validate` — full gate: lint + test:ci + e2e. Mirror this before declaring done.
- Run a single test: `pnpm vitest run src/path/__tests__/Foo.test.tsx`.

## Testing quirks

- Vitest only discovers tests matching `src/**/__tests__/*` (see `test.include` in `vite.config.mts`). Place tests in a `__tests__/` folder; files elsewhere will NOT run.
- **Coverage is enforced at 100%** (istanbul, `"100": true`). Any uncovered line fails `test:ci`. Account for this when adding code.
- Test setup: `src/setupTests.ts`. API calls are mocked with **MSW** (`src/mocks/`), not real PocketBase.
- Cypress `baseUrl` is `http://localhost:3000` (`cypress.config.ts`), but `pnpm preview:test` serves on **4173**. The `test:e2e` scripts launch the server but the baseUrl mismatch means e2e via `preview` may not hit the served app — verify the target port before debugging e2e failures.
- E2e needs a running PocketBase with a `testuser` account (`cypress/fixtures/credentials.json`).

## Conventions

- `@/*` is aliased to `webapp/src/*` (tsconfig + vite-tsconfig-paths). Use it instead of relative paths.
- Structure follows bulletproof-react: code is grouped under `src/features/<feature>/`; shared pieces in `components/`, `hooks/`, `lib/`, `contexts/`, `utils/`.
- UI is **shadcn/ui** (new-york style). Add components with `pnpm dlx shadcn-ui@latest add [component]`; do not hand-write them.
- TS is `strict`. ESLint base is airbnb-typescript + prettier; CSS via stylelint. Auto-fix runs on `pnpm lint`.
- Commits use Conventional Commits (commitizen); use `pnpm commit`.
- PocketBase client (`src/lib/PocketBase.ts`) is constructed with base URL `/` and provided via React context — it relies on the Vite `/api` proxy in dev. Auth lives in `pb.authStore`.

## Backend (`pocketbase/`)

- Schema lives in `pocketbase/pb_migrations/*.js` (PocketBase JS migrations). Edit schema via migrations, not by hand-editing `pb_data/`.
- Run locally: `pocketbase serve` in `pocketbase/` (binary is committed there).
- `docker compose up` (repo root) runs both services; PocketBase exposed on host **8090** (container 8080), webapp on **3000**.

## Gotchas

- `.env.development` contains committed credentials — not used by the app code path; do not assume it configures auth.
- No CI workflows exist in the repo; `pnpm validate` is the de facto check.
