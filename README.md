# Ikromjon Ochilov — Portfolio

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

## Features

- **Bilingual**: EN/DE toggle with localStorage persistence and browser-language detection
- **PDF CV**: Generated on the fly via `@react-pdf/renderer` in the active language
- **Dark mode**: Respects `prefers-color-scheme`, toggleable, persisted in localStorage
- **Print**: `@media print` stylesheet hides nav/toggles, forces black-on-white
- **Accessible**: Keyboard focus rings, `prefers-reduced-motion`, semantic HTML
- **Responsive**: Tested down to 360px
