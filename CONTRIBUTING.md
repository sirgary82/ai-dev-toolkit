# Contributing to AI Dev Toolkit

Thank you for your interest in improving the AI Dev Toolkit! This project is a curated, self-paced documentation toolkit designed to help developers adopt modern AI coding tools effectively.

This guide outlines our scope, style conventions, and contribution process.

---

## Scope: What belongs here

### In Scope

- **Pragmatic, battle-tested workflows** for developers using GitHub Copilot, Claude Code, Gemini CLI, Codex CLI, and Model Context Protocol (MCP).
- **Context management techniques** (e.g. `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`, MCP servers).
- **Discipline & safety** (reviewing AI code, testing strategies, security audits, git worktree isolation).
- **Generic framework guides** focusing on practical backend (.NET, Node/TypeScript, Python) and frontend (React, Vite) patterns.

### Out of Scope

- Marketing material, sponsored reviews, or speculative benchmarks without reproducible methodology.
- Proprietary internal hostnames, company-specific terminology, or non-public domain logic.
- "Vibe coding" tutorials without code review, test verification, or commit discipline.

---

## Guidelines for Content Pages

All content is written in **MDX** (`src/content/docs/`) and rendered with **Astro + Starlight**.

### 1. Frontmatter

Every guide page must include:

```yaml
---
title: Descriptive Page Title
description: Concise one-sentence explanation of what the developer will learn.
track: [backend, frontend] # or just one, if track-specific
status: published # published | draft | coming-soon
order: 5 # position within section
---
```

> **Note:** Do NOT add `lastUpdated` to frontmatter — Starlight calculates this automatically from git timestamps.

### 2. Style and Tone

- **Direct, pragmatic, developer-to-developer**: Focus on _why_ something works and what failure modes to avoid.
- **Use generic identifiers**: Examples should use standard domain examples (`UserService`, `OrderService`, `validateEmail`, `calculateDiscount`) rather than company-specific code.
- **Wrap generic types in backticks**: In MDX, bare angle brackets (like `<T>`) are parsed as JSX tags. Always write `` `Result<T>` `` or `` `Task<T>` ``.
- **Internal links**: Use absolute paths starting with `/` (e.g. `[What Is Context?](/context-management/what-is-context/)`). The Astro integration automatically rewrites paths for GitHub Pages subpath deployment.

---

## Development Workflow

### Prerequisites

- **Node.js**: `>=18.20.8` (Node 20 or Node 22 recommended)
- **npm**: Standard package manager

### Local Setup

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Format files with Prettier
npm run format

# Run production build validation
npm run build
```

The dev server will run locally at `http://localhost:4321/ai-dev-toolkit/`.

---

## Submitting Changes

1. **Fork the repository** and create a feature branch (`git checkout -b feature/my-new-guide`).
2. **Make your changes** following the style and frontmatter guidelines above.
3. If adding a new page, add its entry to the sidebar in `astro.config.mjs`:
   ```js
   { label: 'My Guide Title', slug: 'section/my-guide-slug' }
   ```
4. **Validate**:
   - Run `npm run format` to format with Prettier.
   - Run `npm run build` to ensure all links, JSX tags, and schemas compile cleanly.
5. **Open a Pull Request**: Provide a clear summary of what was added or updated.

### Review Process

This repository is maintained on a solo-maintainer model. PRs are reviewed asynchronously against readability, accuracy to modern AI tooling standards, and build cleanliness.
