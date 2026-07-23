# Ikromjon Ochilov — Portfolio

[![CI](https://github.com/Ikromjon1998/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Ikromjon1998/Portfolio/actions/workflows/ci.yml)

**Live:** [ikromjon-ochilov.com](https://ikromjon-ochilov.com/)

Vite + React + TypeScript portfolio with bilingual support (EN/DE), dark mode, and on-the-fly PDF CV generation.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy

### Vercel

1. Push the repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Framework preset is auto-detected (Vite). Click **Deploy**

### Netlify

1. Push the repo to GitHub
2. Import the repo at [app.netlify.com/start](https://app.netlify.com/start)
3. Build command and publish dir are configured in `netlify.toml`. Click **Deploy**

## Testing

```bash
npm test              # unit tests (Vitest + Testing Library)
npm run test:coverage # unit tests with coverage
npm run test:e2e      # Playwright: smoke, axe accessibility scan (light+dark), visual regression
npm run og:image      # regenerate the Open Graph card (public/og.png)
```

Visual-regression baselines are rendered on macOS and compared locally; CI covers the
same class of bug cross-platform through the axe color-contrast checks.

## Features

- **Bilingual**: EN/DE toggle with localStorage persistence, browser-language detection, and localized `<title>`/meta description
- **PDF CV**: Generated on the fly via `@react-pdf/renderer` in the active language
- **Dark mode**: Respects `prefers-color-scheme`, toggleable, persisted in localStorage
- **Type-safe i18n**: Translation keys derived from the data files — a typo'd key is a compile error
- **Self-hosted fonts**: No Google Fonts CDN requests (GDPR-friendly)
- **SEO**: Meta description, Open Graph, JSON-LD person schema, canonical URL, sitemap
- **Print**: `@media print` stylesheet hides nav/toggles, forces black-on-white
- **Accessible**: WCAG 2.1 AA — axe-verified in light and dark mode on every push, keyboard focus rings, `prefers-reduced-motion`, semantic HTML
- **Security headers**: CSP, HSTS, nosniff, frame-ancestors, referrer and permissions policies
- **Responsive**: Tested down to 360px
- **CI**: Typecheck, lint, format check, unit tests, build, and Playwright e2e on every push
