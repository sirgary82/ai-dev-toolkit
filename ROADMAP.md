# Roadmap

This file tracks the project's direction for infrastructure and process improvements.
Content planning is handled separately.

---

## Open Source Readiness

The goal is to eventually open this repo publicly so others can contribute tips,
corrections, and new tool coverage. These are the steps before that makes sense.

### Must-have before going public

- [ ] Add `LICENSE` file — MIT is the right choice for a docs/tooling project.
      Without it the repo is legally "all rights reserved" and contributors can't submit PRs.
- [ ] Write `CONTRIBUTING.md` — explain what's in scope, how to submit a fix or new page,
      and what the review process looks like (solo maintainer, PR-based).
- [ ] Add GitHub issue and PR templates (`.github/ISSUE_TEMPLATE/`, `.github/pull_request_template.md`)
      so contributors give useful context instead of vague reports.
- [ ] Enable branch protection on `main` — require status checks to pass before merge,
      prevent direct pushes that bypass CI.
- [ ] Update the GitHub social link in `astro.config.mjs` from the Starlight default
      to the actual repo URL.

### Nice-to-have before going public

- [ ] Replace `public/favicon.svg` and `src/assets/houston.webp` with project-specific assets
      (the Astro mascot signals "starter template" to anyone who looks closely).
- [ ] Add a `CHANGELOG.md` or use GitHub Releases to track what changed and when.

### Already done

- [x] README rewritten (was Starlight boilerplate)
- [x] Prettier config added
- [x] `linkedin_post.md` and `content_notes.md` added to `.gitignore`
- [x] `AGENTS.md` in place for AI coding tool context

---

## Possible future directions

- Community-contributed prompt library entries
- Tool comparison pages as new agents emerge
- Versioned "state of AI tools" snapshots so the content ages gracefully
