import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
	loader: glob({
		pattern: ['**/*.{md,mdx}', '!**/_collection.{md,mdx}'],
		base: './src/content/writing',
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

const writingCollections = defineCollection({
	loader: glob({
		pattern: '**/_collection.{md,mdx}',
		base: './src/content/writing',
		generateId: ({ entry }) => entry.split('/').slice(0, -1).join('/'),
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = { writing, writingCollections };
