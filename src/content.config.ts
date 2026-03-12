import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Custom frontmatter fields (track, status, order, cheatsheet, lastUpdated)
// are defined in frontmatter and used for documentation/content management.
// Starlight passes through unknown fields without strict validation.
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),
};
