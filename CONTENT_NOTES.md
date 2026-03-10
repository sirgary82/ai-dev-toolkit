# Content Notes — Solo Maintainer Backlog

Private working notes. Not published.

## Status Key
- ✅ Published
- 🔧 In progress
- 📋 Planned
- 💤 Blocked (waiting on access/info)

---

## Published (all current content)

All 31 pages are published and live at https://sirgary82.github.io/ai-dev-toolkit/

| Section | Pages | Notes |
|---------|-------|-------|
| copilot/ | 5 | Verify shortcuts on each Copilot release |
| context-management/ | 9 | Core section — keep current as tooling evolves |
| claude/ | 5 | Update when new Claude models or CC features ship |
| multi-tool/ | 1 | |
| git-worktrees/ | 3 | |
| pr-review/ | 2 | |
| auditable-changes/ | 2 | |
| tracks/ | 2 | Update order/links as new guides are added |

---

## Next content — Phase 5: Testing with AI

The biggest gap in the current guide. Testing is where AI tooling has the highest leverage and the most gotchas.

### `testing/ai-assisted-testing.mdx` _(write first)_
The flagship article for this section. Core thesis: AI is excellent at generating test scaffolding and test cases, but the developer must own the test strategy. Cover:
- Using Copilot to generate unit test skeletons from an existing function
- Giving Claude a function + its interface contract and asking for edge cases you haven't thought of
- The prompt pattern: "here is the function, here is the expected behaviour — what cases am I missing?"
- What AI gets wrong: happy-path bias, not knowing business rules, generating tests that pass but don't assert the right thing
- The rule: AI writes the test scaffolding, you write the assertions for business logic

### `testing/tdd-with-ai.mdx`
Test-driven development changes the AI workflow significantly — you write the test first and ask AI to implement the code to pass it. Cover:
- The TDD + AI loop: write failing test → give Claude the test + interface → ask for implementation → review
- Why this produces better AI output than implementation-first (the test is the spec)
- Red/green/refactor with CC: using CC for the green step, refactoring step separately
- Practical limits: where TDD + AI breaks down (integration tests, tests that require external state)

### `testing/testing-ai-generated-code.mdx`
Specific discipline for reviewing AI-generated code through a testing lens:
- Why AI-generated code needs more test coverage, not less (you didn't write it, you reviewed it)
- Mutation testing as a way to check whether your tests actually catch what AI might have got wrong
- The coverage trap: 80% line coverage on AI-generated code can mean very little
- Using Claude to review its own output for untested edge cases ("what would you test that I haven't tested?")

---

## Next content — Phase 6: CI/CD pipeline

### `cicd/ai-for-pipeline-config.mdx` _(write first)_
GitHub Actions YAML is exactly the kind of repetitive, structured config that AI handles well. Cover:
- Using Copilot to generate GitHub Actions workflow files (build, test, deploy steps for .NET and React)
- The prompt pattern for pipeline generation: give it the tech stack, the test command, the deploy target
- Asking Claude to explain an existing workflow you inherited ("walk me through what this pipeline does and flag anything unusual")
- Common mistakes AI makes with Actions: using deprecated action versions, wrong cache keys, missing environment variable scoping

### `cicd/pr-quality-gates.mdx`
Beyond automated review — using AI in the pipeline to enforce standards:
- Copilot code review as a required PR check (the GitHub setting to require it)
- Adding a Claude-powered review step via API in the pipeline (when/why this makes sense vs Copilot's built-in)
- Automated checks: conventional commits, AGENTS.md update detection (if code changes patterns but AGENTS.md doesn't change, flag it)
- What to gate on vs what to leave as advisory

### `cicd/dependency-upgrades.mdx`
Dependency management is painful; AI makes it more manageable:
- Using CC to understand the impact of a major version upgrade before doing it ("here is the changelog for v5 → v6, what will break in this codebase?")
- The prompt pattern: paste the migration guide, ask for a checklist specific to your code
- Automating Dependabot PRs with AI-assisted upgrade notes
- NuGet (.NET) and npm (React) specific patterns

---

## Next content — Phase 7: Security

### `security/reviewing-ai-generated-code.mdx` _(write first)_
The highest-stakes topic in the guide. Core thesis: AI tools don't have security context — they don't know your threat model, your trust boundaries, or what's sensitive in your domain. That's always the developer's job. Cover:
- The OWASP Top 10 patterns AI most commonly introduces: SQL injection via string concatenation, missing input validation, insecure direct object references, hardcoded credentials
- The review checklist for AI-generated code with external inputs (controllers, API endpoints, form handlers)
- Asking Claude to review its own output for security issues ("review this for OWASP Top 10 issues")
- What AI cannot know: your authorisation model, which fields are sensitive, what constitutes a privilege escalation in your domain

### `security/keeping-secrets-out.mdx`
Practical hygiene for using AI tools without leaking sensitive data:
- What not to paste into Copilot Chat or Claude: connection strings, API keys, PII, internal hostnames
- How to sanitise code before pasting (replace real values with placeholders)
- Enterprise Copilot settings: ensuring prompts aren't used for training
- Claude's data handling for API vs web UI (relevant for teams using Claude via API in pipelines)
- `.gitignore` and `.env` discipline — AI tools should never see production config

---

## Next content — Phase 8: Debugging with AI

### `debugging/ai-assisted-debugging.mdx`
A practical guide to using CC and Copilot for debugging — not just asking "why is this broken" but using structured techniques:
- Giving CC a stack trace + the relevant code: what to include, what to omit
- The rubber duck pattern: explaining the bug to CC often surfaces the cause before CC even responds
- Using CC to generate a minimal reproduction case
- Asking CC "what are the most likely causes of this symptom?" before diving into code
- When to stop using AI for debugging: deep runtime issues, race conditions, environment-specific failures

---

## Next content — Phase 9: Refactoring with AI

### `refactoring/ai-assisted-refactoring.mdx`
Refactoring is one of the highest-value uses of Claude Code — it can hold the full context of a change across multiple files. Cover:
- The pattern: explore first, plan second, implement third (never ask CC to refactor without reading the code first)
- Scope control: why you want CC to refactor one class/module at a time, not the whole service
- Extracting an interface / introducing a pattern (e.g. Repository pattern) with CC
- Using CC for rename refactors across a large codebase
- The AGENTS.md update step: after a significant refactor, always update the context file

---

## Next content — Phase 10: Prompt library

### `prompts/prompt-library-dotnet.mdx`
A reference page of copy-paste prompts for .NET developers, organised by task:
- "Add a new API endpoint that..." (with the pattern for including existing controller context)
- "Write unit tests for..." (with the pattern for including the interface)
- "Review this for OWASP issues..."
- "Explain what this query does and whether it will perform well at scale"
- "I want to migrate from X to Y — what's the impact in this codebase?"

### `prompts/prompt-library-react.mdx`
Same for React/frontend:
- "Build a component that..." (with the pattern for including design system tokens)
- "Add a custom hook for..."
- "Review this component for accessibility issues"
- "Write tests for this component using React Testing Library"

---

## Ongoing Checklist (pre-publish per article)
- [ ] No company names, internal systems, or real business logic
- [ ] No version-locked claims — use dates instead
- [ ] All internal links resolve
- [ ] Code examples use generic names: `UserService`, `getOrderById`, `validateEmail`
- [ ] Tested on mobile (sidebar collapse)
- [ ] Add slug to sidebar in astro.config.mjs
- [ ] Add to the relevant track page (backend.mdx and/or frontend.mdx)

## Feedback Log

_Add notes from dev feedback here after initial rollout._
