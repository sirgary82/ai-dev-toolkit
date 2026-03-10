// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	// Set this to your deployed URL before publishing (GitHub Pages, Netlify, Vercel, etc.)
	// e.g. site: 'https://your-org.github.io/ai-dev-toolkit'
	// site: 'https://example.com',
	integrations: [
		starlight({
			title: 'AI Dev Toolkit',
			description: 'Self-paced guides for developers adopting AI coding tools.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
			],
			sidebar: [
				{
					label: 'Tracks',
					items: [
						{ label: 'Backend (.NET / Azure)', slug: 'tracks/backend' },
						{ label: 'Frontend (React)', slug: 'tracks/frontend' },
					],
				},
				{
					label: 'GitHub Copilot in VSCode',
					items: [
						{ label: 'Getting Started', slug: 'copilot/getting-started' },
						{ label: 'Inline Suggestions', slug: 'copilot/inline-suggestions' },
						{ label: 'Chat Mode', slug: 'copilot/chat-mode' },
						{ label: 'Agent Mode', slug: 'copilot/agent-mode' },
						{ label: 'Keyboard Shortcuts', slug: 'copilot/keyboard-shortcuts' },
					],
				},
				{
					label: 'Context Management',
					items: [
						{ label: 'What Is Context?', slug: 'context-management/what-is-context' },
						{ label: 'Prompt Engineering Basics', slug: 'context-management/prompt-engineering-basics' },
						{ label: 'The copilot-instructions.md File', slug: 'context-management/copilot-instructions-file' },
						{ label: 'Scoping Your Requests', slug: 'context-management/scoping-requests' },
						{ label: 'Repo Documentation for AI Tools', slug: 'context-management/repo-docs-for-ai' },
						{ label: 'Team Agent File Management', slug: 'context-management/team-agent-file-management' },
						{ label: 'Agent File Lifecycle', slug: 'context-management/agent-file-lifecycle' },
						{ label: 'Large Repo Strategies', slug: 'context-management/large-repo-strategies' },
						{ label: 'MCP for Repo Context', slug: 'context-management/mcp-repo-context' },
					],
				},
				{
					label: 'Claude',
					items: [
						{ label: 'Overview', slug: 'claude' },
						{ label: 'Getting Started', slug: 'claude/getting-started' },
						{ label: 'Claude Code', slug: 'claude/claude-code' },
						{ label: 'Best Practices for Coding', slug: 'claude/best-practices' },
						{ label: 'Claude Code Tips & Tricks', slug: 'claude/claude-code-tips' },
					],
				},
				{
					label: 'Copilot + Claude Together',
					items: [
						{ label: 'Using Both Tools', slug: 'multi-tool/copilot-plus-claude' },
					],
				},
				{
					label: 'Git Worktrees',
					items: [
						{ label: 'What and Why', slug: 'git-worktrees/what-and-why' },
						{ label: 'Setup and Workflow', slug: 'git-worktrees/setup-and-workflow' },
						{ label: 'Parallel AI Workstreams', slug: 'git-worktrees/parallel-ai-workstreams' },
					],
				},
				{
					label: 'PR Review Automation',
					items: [
						{ label: 'Automated Review Basics', slug: 'pr-review/automated-review-basics' },
						{ label: 'PR Impact Assessment', slug: 'pr-review/pr-impact-assessment' },
					],
				},
				{
					label: 'Auditable Changes',
					items: [
						{ label: 'Incremental Mindset', slug: 'auditable-changes/incremental-mindset' },
						{ label: 'Commit Discipline', slug: 'auditable-changes/commit-discipline' },
					],
				},
			],
		}),
	],
});
