# Changelog

All notable changes to the **AI Dev Toolkit** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.5.0] - 2026-09-19

### Added

- **New Section: Enterprise Agent Sandboxing & Infrastructure (4 guides)**:
  - `enterprise/blast-radius-and-threat-model.mdx` — Formal threat modeling for autonomous coding agents, prompt injection vectors, hallucinated dependency execution, and blast radius tiering (Tiers 1–4).
  - `enterprise/workstation-sandboxing.mdx` — Local workstation defense-in-depth: Docker-in-Docker containment, rootless containers, microVMs (Firecracker/gVisor), eBPF execution auditing with Tetragon, and bind-mount isolation.
  - `enterprise/remote-agent-farms.mdx` — Headless multi-agent execution architectures on AWS ECS/Fargate, Kubernetes ephemeral job pods, Dev Containers / Gitpod / Codespaces, and credential isolation via short-lived OIDC tokens.
  - `enterprise/supply-chain-and-egress-control.mdx` — Protecting against AI package slopsquatting, MITM egress filtering with Cilium/Squid forward proxies, enterprise package mirrors (Artifactory/Nexus), and CI/CD promotion pipelines.
- **Master Guide: Agent Orchestration & Subagents in Coding**:
  - Rewrote and deeply expanded `agentic-flows/multi-agent-delegation.mdx` into an exhaustive architectural guide for orchestrating multi-agent software engineering workflows.
  - Covered 4 orchestration topologies (Hierarchical Orchestrator-Worker, Dynamic Swarms, Pipeline/Assembly Line, and Specialist Pool with Router).
  - Added declarative subagent specifications using `.claude/agents/*.md` and multi-model routing (assigning high-tier frontier models like Claude Opus 5 / GPT-6 Astra for architecture planning and fast/cost-effective models like Gemini 3.8 Flash / Haiku 4.5 for test execution).
  - Detailed the Artifact Bridge protocol for zero-loss state handoffs between context windows.
- **2026 Frontier Models Landscape**:
  - Updated foundational guides (`foundations/before-you-start.mdx`) and comparison tables (`other-agents/index.mdx`) with latest model generations: Claude Opus 5 & Sonnet 5, OpenAI GPT-6 Astra & GPT-5.6, and Google Gemini 3.8 Flash & Pro 3.1.

---

## [0.4.0] - 2026-09-19

### Added

- **New Section: Agentic Flows (5 guides)**:
  - `agentic-flows/index.mdx` — Overview of autonomous agent loops, ReAct patterns, and levels of agency.
  - `agentic-flows/plan-first-flow.mdx` — Preventing premature execution with research phases, implementation plans, and the "Grill Me" interview technique.
  - `agentic-flows/test-driven-agentic-loop.mdx` — Red-Green-Refactor autonomous loops, deterministic feedback, and defenses against test tampering.
  - `agentic-flows/multi-agent-delegation.mdx` — Coordinator-specialist patterns, context window preservation, and clean state handoffs.
  - `agentic-flows/guardrails-and-approvals.mdx` — Three-tiered permission models, disposable Git worktree sandboxing, and pre-flight checkpoints.
- **Deepened "Other Coding Agents" Coverage**:
  - Added distinct "What's the Jam?" superpower profiles and step-by-step quickstarts for Codex CLI, Gemini CLI, and Copilot CLI.
  - Documented the major industry milestone: **Claude Code native `AGENTS.md` support** unifying context across all major coding agents.

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
