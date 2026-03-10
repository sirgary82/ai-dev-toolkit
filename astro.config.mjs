// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE = '/ai-dev-toolkit';

/**
 * Astro integration that rewrites all internal href links in built HTML
 * to include the base path. Fixes Starlight sidebar and content links
 * when deploying to a GitHub Pages subpath.
 */
function prefixLinksIntegration(base) {
	const b = base.replace(/\/$/, '');
	const esc = b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	// Match href="/ that is NOT already prefixed with the base
	const pattern = new RegExp(`href="(?!${esc}/|${esc}"|https?://|//|#|mailto:)(/[^"]*)`, 'g');

	async function processDir(dir) {
		const entries = await readdir(dir, { withFileTypes: true });
		await Promise.all(entries.map(async (entry) => {
			const full = join(dir, entry.name);
			if (entry.isDirectory()) {
				await processDir(full);
			} else if (entry.name.endsWith('.html')) {
				const original = await readFile(full, 'utf-8');
				const rewritten = original.replace(pattern, (_, path) => `href="${b}${path}`);
				if (rewritten !== original) await writeFile(full, rewritten);
			}
		}));
	}

	return {
		name: 'prefix-internal-links',
		hooks: {
			'astro:build:done': async ({ dir }) => {
				const distPath = dir instanceof URL ? fileURLToPath(dir) : String(dir);
				await processDir(distPath);
			},
		},
	};
}

export default defineConfig({
	site: 'https://sirgary82.github.io',
	base: BASE,
	integrations: [
		prefixLinksIntegration(BASE),
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
