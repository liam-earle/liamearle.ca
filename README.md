# liamearle.ca

Personal website built with Astro, Tailwind CSS, and React.

Overview

- Purpose: portfolio and blog for Liam Earle.
- Stack: `Astro` + `Tailwind CSS` + `React` (via `@astrojs/react`) + TypeScript types.

Quick start

Prerequisites: Node.js 18+ and npm.

1. Install dependencies

```bash
npm install
```

2. Run local dev server

```bash
npm run dev
```

Build & Preview

```bash
npm run build
npm run preview
```

Available scripts (from `package.json`)

- `dev` / `start`: run the dev server (`astro dev`)
- `build`: build the site (`astro build`)
- `preview`: preview the production build (`astro preview`)

Project layout (key files)

- `public/` — static assets (images, icons)
- `src/pages/index.astro` — the homepage
- `src/components/ExperienceCard.astro` — experience card component
- `src/components/SkillTag.astro` — skill tag component
- `src/components/Sidebar.tsx` — site sidebar
- `src/components/FlashLight.tsx` — interactive UI component
- `src/hooks/` — small utilities (`useMousePosition.ts`, `useScrollPosition.ts`)
- `content/experience.json` — experience data
- `content/projects.json` — projects data
- `tailwind.config.mjs` — Tailwind configuration
- `Dockerfile` / `docker-compose.yml` — optional container setup

Editing content

- Update the site content by editing the JSON files in `content/`.
- Change layout and markup in `src/pages/` and `src/components/`.

Deployment

The site builds to a static `./dist/` folder and can be deployed to any static host (Netlify, Vercel, GitHub Pages, etc.).
