# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev           # Vite dev server
npm run build         # tsc -b (typecheck) + vite build
npm run typecheck     # tsc -b only
npm run lint          # eslint .
npm run format:check  # prettier --check (CI fails on violations; fix with npm run format)
npm test              # all unit tests (Vitest, jsdom)
npx vitest run src/components/Work.test.tsx   # single test file
npm run test:e2e      # Playwright (starts a preview server on :4173 — run npm run build first)
npx playwright test e2e/smoke.spec.ts          # single e2e spec
npm run og:image      # regenerate public/og.png
```

CI runs typecheck, lint, format check, unit tests, build, and Playwright e2e on every pull request and every push to `main` — run these locally before pushing.

Visual-regression baselines (`e2e/visual.spec.ts-snapshots/`) are rendered on macOS and the spec is skipped in CI. Update them locally with `npx playwright test --update-snapshots`.

## Architecture

Vite + React 18 + TypeScript single-page portfolio (no router). `src/App.tsx` composes the section components in page order inside `I18nProvider`.

### One typed data source, four outputs

`src/data/*.ts` (projects, expertise, education, languages, openSource, personal) holds all non-translatable facts: IDs, stacks, metric keys, URLs, dates. Those IDs flow into `src/i18n/types.ts`, which derives the `Translations` interface from them — so `en.ts`/`de.ts` must cover exactly the keys the data defines, and a typo'd or missing translation key is a compile error. `src/i18n/parity.test.ts` additionally enforces that `en` and `de` have identical structure.

The same data feeds:

1. **The site** — components read translations via `useTranslation()`.
2. **The PDF CV** — `src/cv/CVDocument.tsx` renders it client-side via `@react-pdf/renderer` in the active language.
3. **`/llms.txt` and `/resume.json`** — emitted at build time by the `agentFiles` Vite plugin in `vite.config.ts`, which calls `scripts/agentFiles.ts`. Build-only (`apply: 'build'`) — these files do not exist on the dev server.
4. **The "Ask my CV" chat** — `netlify/functions/ask-cv.mts` imports `buildLlmsTxt()` from `scripts/agentFiles.ts` to ground its Claude system prompt in the same profile.

Consequence: adding or changing content usually means editing a `src/data/*.ts` file **plus both** `src/i18n/en.ts` and `src/i18n/de.ts`; the compiler and parity test catch drift, and the CV/agent files pick it up automatically.

### Ask my CV (Netlify function)

`netlify/functions/ask-cv.mts` requires `ANTHROPIC_API_KEY` in the Netlify environment; without it, it returns 503 and the `AskCV.tsx` widget degrades to an email hint. The model and limits (`claude-haiku-4-5`, 400 max output tokens, 1000 chars/message, 12-turn cap, 10 req/min/IP) are defined at the top of that file. The system prompt mandates plain text (no markdown), ≤4 sentences, answers only from the profile. Per-IP rate limiting is in-memory per function instance.

### Styling and constraints

- All styles live in `src/index.css` — plain CSS with custom properties, no framework. Dark mode is class/`prefers-color-scheme` based via `src/hooks/useDarkMode.ts`; there is also an `@media print` stylesheet.
- **Strict CSP** in `netlify.toml` (mirrored in `vercel.json`): no external scripts, styles, fonts, or connections. Fonts are self-hosted via `@fontsource`. Anything loading from a CDN will be blocked in production — update the CSP deliberately or keep assets local.
- Accessibility is CI-enforced: `e2e/a11y.spec.ts` runs axe in light and dark mode and fails on violations (including color contrast).

### Testing setup

Unit tests use Testing Library with helpers in `src/test/` (`setup.ts`, `mocks.ts`, and an i18n render wrapper in `i18n.tsx`). E2e specs in `e2e/`: `smoke`, `a11y` (axe), `visual` (local-only).

## Conventions

- Public contact email in content is `ikromjon98.98@icloud.com` (not the Gmail address).
- Do not add a `Co-Authored-By` trailer to commits.
