# Roadmap

This file tracks the project's direction for infrastructure and process improvements.
Content planning is handled separately.

---

## Open Source Readiness

The goal is to eventually open this repo publicly so others can contribute tips,
corrections, and new tool coverage. These are the steps before that makes sense.

### Must-have before going public

- [x] Add `LICENSE` file — MIT license added.
- [x] Write `CONTRIBUTING.md` — scope, style rules, and PR review workflow documented.
- [x] Add GitHub issue and PR templates (`.github/ISSUE_TEMPLATE/`, `.github/pull_request_template.md`).
- [ ] Enable branch protection on `main` — require status checks to pass before merge (GitHub repository settings).
- [x] Update the GitHub social link in `astro.config.mjs` to actual repo URL.

### Nice-to-have before going public

- [ ] Replace `public/favicon.svg` and `src/assets/houston.webp` with project-specific assets.
- [x] Add a `CHANGELOG.md` to track what changed across versions.

### Already done

- [x] README rewritten
- [x] Prettier config added
- [x] `linkedin_post.md` and `content_notes.md` added to `.gitignore`
- [x] `AGENTS.md` in place for AI coding tool context
- [x] 6-month landscape update (September 2026 sweep)
- [x] Agentic Flows section added (5 guides on ReAct, plan-first, TDD loops, delegation, guardrails)
- [x] Universal AGENTS.md parity documented across all major coding agents

---

## Possible future directions

- Community-contributed prompt library entries
- Tool comparison pages as new agents emerge
- Versioned "state of AI tools" snapshots so the content ages gracefully
