import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const posts = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		type: z.enum(['note', 'link', 'photo', 'article']).default('note'),
		link: z.string().url().optional(),
		image: z.string().optional(),
	}),
});

export const collections = { projects, posts };
