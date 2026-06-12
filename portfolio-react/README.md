# Bollineni Mohan Krishna Sai — Portfolio (React)

This site is a dark/blue high-contrast portfolio built with React + Vite and meant to be deployed on GitHub Pages.

## Local development

```bash
cd portfolio-react
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (GitHub Pages)

```bash
npm run deploy
```

### Notes
- `npm run deploy` uses the `dist/` folder and publishes to the `gh-pages` branch via `gh-pages`.
- For smoother auth, set env vars (from GitHub Actions or your terminal):
  - `GITHUB_REPOSITORY=owner/repo`
  - `GITHUB_ACTOR=your-username`
  - `GITHUB_TOKEN=your-token`


