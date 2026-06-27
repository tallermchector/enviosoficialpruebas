# Synthesis - Milestone 1: Test Infra & Runner Setup

## Catalog of Inputs
- **Explorer 1** (`fd600920`): Recommends Playwright. Detailed config in `playwright.config.ts`. Proposed test script in `package.json` and `.gitignore` updates. Proposed verification test in `e2e/homepage.spec.ts` matching metadata, logo, colors `#0635A6` / `#FFEC00` and navigation.
- **Explorer 3** (`0ac08f12`): Recommends Playwright. Identical configurations for `playwright.config.ts`, `package.json` scripts, and verification tests. Noted potential database seed requirement and offline installation caveats in code-only environments.
- **Explorer 2** (`0cd9810e`): Drafted configs but didn't write handoff. Consensus is unaffected.

## Consensus
1. **Framework**: Playwright is chosen as the standard E2E test framework for this project.
2. **Directory Structure**: Test cases will reside in `/e2e` at the project root.
3. **Execution Scripts**:
   - `test:e2e`: `playwright test`
   - `test:e2e:ui`: `playwright test --ui`
   - `test:e2e:debug`: `playwright test --debug`
   - `test:e2e:report`: `playwright show-report`
4. **Dev Server and Base URL**: Run against `http://localhost:3000`. Use the Playwright webServer hook to start the server: `process.env.CI ? 'pnpm run build && pnpm run start' : 'pnpm run dev'`.
5. **Initial Verification Test**: Create `/e2e/homepage.spec.ts` asserting title matching `/Mensajería y Logística E-commerce/`, brand name `EnvíosDosRuedas`, custom CSS colors (`#0635A6` and `#FFEC00`), and clicking desktop navigation links to `/cotizar/express`.

## Action Plan for Worker
1. Install `@playwright/test` as a devDependency.
2. Patch `package.json` with the new test scripts.
3. Update `.gitignore` to ignore Playwright report/results files.
4. Create `playwright.config.ts` in the project root.
5. Create `e2e/homepage.spec.ts` with the verification tests.
6. Verify and run `pnpm run test:e2e` (or equivalent test runner verification).
