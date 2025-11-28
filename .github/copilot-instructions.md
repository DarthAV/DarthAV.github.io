## Repository quick summary

This is a TypeScript React single-page portfolio built with Create React App (`react-scripts`) and Tailwind CSS. The app entry is `src/index.tsx` → `src/App.tsx`. The main UI is composed in `src/pages/Home.tsx` which imports section components from `src/pages/sections/*`.

## Key commands (from `package.json`)

- Install: `npm install`
- Dev server: `npm run start` (runs `react-scripts start`, opens at http://localhost:3000)
- Build: `npm run build` (outputs to `build/`)
- Deploy: `npm run deploy` (uses `gh-pages -d build`; `predeploy` runs `build` first)
- Tests: `npm run test` (runs `react-scripts test`)

## Architecture & patterns an AI agent should know

- Entry points: `src/index.tsx` (boot), `src/App.tsx` (providers + theme), `src/pages/Home.tsx` (page composition).
- UI composition: `src/pages/Home.tsx` imports `Intro`, `Education`, `Experience`, `Skills`, etc. Update/extend these files to change page content.
- Content data: structured arrays live in `src/data/*.tsx` (e.g. `experience.tsx`, `education.tsx`, `skills.tsx`). These contain plain JS/TS objects and imported image assets — edit these files to change data-driven content.
- Components: reusable UI lives in `src/components/*` (e.g. `HeaderFooter.tsx`, `ThemeSwitcher.tsx`, `ScrollTop.tsx`). Follow existing functional-TSX style and PascalCase filenames.

## Styling and utilities

- Tailwind is used for styles. Config is in `tailwind.config.js` and global CSS in `src/index.css`.
- Classnames are composed using `cn` helper (`src/utils/cn.ts`) which uses `clsx` + `tailwind-merge`. Use `cn('p-4', condition && 'text-red-500')` to stay consistent with existing patterns.
- Fonts and images live in `src/assets/*` — image imports (e.g. `import profile2 from '../assets/img/medium/profile2.jpg'`) are used directly in data files and components.

## Theme & providers

- App wraps with `@heroui/react`'s `HeroUIProvider` and `next-themes`'s `ThemeProvider` in `src/App.tsx`. Default theme is `dark` (`defaultTheme="dark"`). Prefer adding theme-aware classes (Tailwind `dark:` variants) when changing styles.

## Build / Deploy notes

- `npm run build` produces a `build/` folder already tracked in the repo (used as the deploy artifact). Deploy uses `gh-pages -d build`.
- `package.json` has a `homepage` field set; be mindful if you change the domain or GitHub Pages config.

## Project-specific conventions to follow

- Use TypeScript `.tsx` for components and `.ts`/`.tsx` for data files. Keep types inline with existing patterns (this repo currently uses loose object shapes rather than strict exported interfaces in most data files).
- Data-driven sections: prefer editing `src/data/*` to change content rather than hardcoding text in components.
- Navigation: `Header` reads a `navSections` array from `Home`. The current `Home` sets `navSections: string[] = []` — if you add anchors, update that array.

## Files to inspect when making changes (examples)

- Top-level: `src/index.tsx`, `src/App.tsx`
- Page composition: `src/pages/Home.tsx`
- Reusable components: `src/components/HeaderFooter.tsx`, `src/components/ThemeSwitcher.tsx`
- Data sources: `src/data/experience.tsx`, `src/data/education.tsx`, `src/data/skills.tsx`
- Utilities: `src/utils/cn.ts`

## What to avoid / sanity checks

- Don't remove `ThemeProvider` or `HeroUIProvider` wrappers without understanding provider side-effects.
- When adding images, import them from `src/assets/*` and update the consuming data file so the bundler picks them up.
- Confirm `homepage` in `package.json` is correct before changing deploy targets.

If anything here is unclear or you'd like additional examples (e.g., how to add a new section component, or a ready-to-run example that updates `src/data/experience.tsx`), tell me which area and I will expand or iterate.
