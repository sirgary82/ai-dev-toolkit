# AI Dev Toolkit — Agent Context

## What this project is

A static documentation site built with Astro + Starlight. 31 pages of self-paced guides for developers adopting AI coding tools (GitHub Copilot, Claude, Claude Code). Deployed to GitHub Pages at `https://sirgary82.github.io/ai-dev-toolkit/`.

## Stack

- **Astro 5.6.1** + **Starlight 0.37.7**
- **MDX** for all content pages
- **Node 20**, `npm` for package management
- Static output → `dist/` → GitHub Pages via GitHub Actions

## Project structure

```
astro.config.mjs         # Sidebar nav, site URL, base path, prefixLinksIntegration
remark-prefix-links.mjs  # (deleted) replaced by inline integration in astro.config.mjs
src/
  components/
    Callout.astro         # tip | warning | note | coming-soon
    Badge.astro           # coming-soon | new | draft | updated
    CheatSheet.astro      # accepts items[] or sections[] props
  content/
    config.ts             # docsLoader() + docsSchema() — do not add custom fields
    docs/                 # all 31 pages live here
      copilot/            # 5 pages
      context-management/ # 9 pages
      claude/             # 5 pages (index.mdx = /claude/ slug)
      multi-tool/         # 1 page
      git-worktrees/      # 3 pages
      pr-review/          # 2 pages
      auditable-changes/  # 2 pages
      tracks/             # 2 pages (backend, frontend)
      index.mdx           # homepage
.github/workflows/
  deploy.yml              # Astro build → upload artifact → deploy to Pages
```

## Critical: GitHub Pages base path

The site deploys under `/ai-dev-toolkit/`, not the root. This requires:

1. `base: '/ai-dev-toolkit'` in `astro.config.mjs`
2. The `prefixLinksIntegration` in `astro.config.mjs` — rewrites every `href="/..."` in built HTML to `href="/ai-dev-toolkit/..."` after the build. **Do not remove this.** Starlight does not apply the base to its own sidebar links automatically.

Do not hardcode `/ai-dev-toolkit/` into MDX link hrefs. The integration handles it at build time.

## Zod version constraint

`package.json` has `"overrides": { "zod": "3.25.76" }`. Do not remove this. Starlight's schema uses Zod v3 internals; if npm resolves to Zod v4 the build fails with a `_zod` error.

## Adding a new page

1. Create `src/content/docs/<section>/<slug>.mdx` with this frontmatter:
   ```yaml
   ---
   title: Page Title
   description: One sentence description.
   track: [backend, frontend]   # or just one
   status: published            # published | draft | coming-soon
   order: 8                     # position within section
   ---
   ```
2. Add the entry to the sidebar in `astro.config.mjs`:
   ```js
   { label: 'Page Title', slug: 'section/slug' }
   ```
3. Do not add `lastUpdated` to frontmatter — Zod date parsing causes build errors.

## MDX conventions

- Import components at the top: `import Callout from '../../../components/Callout.astro';`
- Generic type syntax (`Result<T>`, `Task<T>`) must be wrapped in backticks — MDX parses bare `<T>` as JSX
- Internal links use absolute paths starting with `/` (the integration prefixes them at build time)
- No company names, internal hostnames, or business-specific references anywhere

## Dev commands

```bash
npm run dev    # local dev server at localhost:4321/ai-dev-toolkit/
npm run build  # builds to dist/ — run this to verify before pushing
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml` automatically. The workflow: installs deps → `astro build` → uploads `dist/` → deploys to Pages. No manual steps needed.

Do not add a Jekyll workflow or enable branch-based Pages deployment — it will conflict with the Astro workflow and override it.
