# AI Dev Toolkit

A self-paced documentation site for developers adopting AI coding tools — GitHub Copilot, Claude, and Claude Code.

**Live site:** https://sirgary82.github.io/ai-dev-toolkit/

---

## What's in here

Structured guides covering:

- GitHub Copilot in VSCode (inline suggestions, chat, agent mode)
- Context management and prompt engineering
- Claude and Claude Code workflows
- Git worktrees for parallel AI workstreams
- PR review automation, testing, CI/CD, security, debugging, refactoring
- Learning tracks for .NET/Azure (backend) and React (frontend)
- Exercises, case studies, and self-assessment checklists

## Stack

- [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) — static site generator for documentation
- MDX content pages
- Deployed to GitHub Pages via GitHub Actions

## Running locally

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321/ai-dev-toolkit/`

## Commands

| Command           | Action                              |
| :---------------- | :---------------------------------- |
| `npm run dev`     | Start local dev server at port 4321 |
| `npm run build`   | Build to `./dist/`                  |
| `npm run preview` | Preview production build locally    |
| `npm run format`  | Format all files with Prettier      |

## Deployment

Pushing to `main` triggers the GitHub Actions workflow which builds and deploys to GitHub Pages automatically.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) — coming soon.
