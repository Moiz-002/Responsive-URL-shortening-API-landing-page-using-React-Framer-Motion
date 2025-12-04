# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Tailwind CSS (Dark / Light theme)

This project has been updated to include Tailwind CSS with class-based dark mode. Key files added:

- `tailwind.config.cjs` — Tailwind config (darkMode: 'class').
- `postcss.config.cjs` — PostCSS configuration.
- `src/index.css` — contains Tailwind directives and CSS variables for theming.
- `index.html` — early script to initialise theme from `localStorage` to avoid FOUC.
- `src/App.jsx` — small demo UI and accessible theme toggle (persisted to `localStorage`).

To try it locally:

```powershell
cd path/to/url-shortening-app
npm install
npm run dev
```

