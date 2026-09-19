# Changelog

All notable changes to the **AI Dev Toolkit** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.3.0] - 2026-09-18

### Added

- **Claude 3.7 Sonnet Coverage**: Documented hybrid reasoning and extended thinking mode across Claude Code, Copilot, and foundational guides.
- **VS Code Copilot Native MCP**: Documented `.vscode/mcp.json` configuration for Agent Mode alongside Claude Code CLI commands.
- **Agentic IDEs Comparison Guide**: Added comprehensive side-by-side analysis of Cursor, Windsurf, Copilot Agent Mode, and Claude Code (`/other-agents/agentic-ides-comparison/`).
- **Building Custom MCP Servers Guide**: Step-by-step tutorial for building TypeScript and Python MCP servers to expose proprietary docs and APIs (`/context-management/building-custom-mcps/`).
- **Open Source Readiness**: Added `LICENSE` (MIT), `CONTRIBUTING.md`, GitHub issue templates (`bug_report.md`, `new_guide.md`), and `pull_request_template.md`.
- **Glossary & Foundations**: Added definitions for Model Context Protocol, Hybrid Reasoning, Thinking Budget, and Prompt Files (`.prompt.md`).

### Changed

- **6-Month Landscape Sweep**: Audited and refreshed all 61 existing pages to reflect September 2026 tooling state.
- **Copilot Agent Mode**: Updated from preview to General Availability; added multi-model picker details (Claude 3.7 Sonnet, GPT-4o, o1, o3-mini, Gemini 2.5).
- **Claude Code CLI**: Updated commands with `/resume`, `/diff`, `/model`, `/mcp`, and CLI management (`claude mcp add/list/remove`).
- **Copilot CLI**: Reflected mature GA status, Autopilot mode, and LSP integrations.
- **LLM Version Staleness**: Updated runtime versions (.NET 9 LTS / .NET 10 preview, React 19, Vite 6).
- **Bug Fix**: Fixed `CheatSheet.astro` property mismatch in `custom-commands.mdx`.
- **Repository Metadata**: Corrected repository GitHub URL in `astro.config.mjs` and updated `AGENTS.md`.

---

## [0.2.0] - 2026-03-12

### Added

- **Phase 5-10 Content**:
  - Testing with AI (`ai-assisted-testing`, `tdd-with-ai`, `testing-ai-generated-code`).
  - CI/CD automation (`ai-for-pipeline-config`, `pr-quality-gates`, `dependency-upgrades`).
  - Security discipline (`reviewing-ai-generated-code`, `keeping-secrets-out`).
  - Debugging (`ai-assisted-debugging`) and Refactoring (`ai-assisted-refactoring`).
  - Prompt Libraries for .NET and React.
- **Other Coding Agents Section**: Codex CLI, Gemini CLI, and GitHub Copilot CLI.
- **Interactive Exercises**: 4 hands-on practice modules (Phases 1-7).
- **Case Studies**: End-to-end walkthroughs with annotated missteps for backend (.NET) and frontend (React).
- **Self-Assessment & Troubleshooting**: Phase checklists and common failure modes guide.
- **Glossary**: Initial 60+ terms across 7 concept areas.

---

## [0.1.0] - 2026-03-11

### Added

- Initial release with 31 core guides covering:
  - Foundations and orientation (`before-you-start`).
  - GitHub Copilot in VS Code (inline, chat, agent mode, keyboard shortcuts).
  - Context management, prompt engineering, and `copilot-instructions.md`.
  - Claude and Claude Code basics.
  - Git worktrees for parallel AI workstreams.
  - PR review automation and commit discipline.
  - Backend (.NET) and Frontend (React) learning tracks.
