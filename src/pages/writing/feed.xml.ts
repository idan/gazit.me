import type { APIRoute } from 'astro';
import { createWritingFeed } from '../../lib/writing-feed';
import { getWritingPosts, getWritingSubcollections } from '../../lib/writing';

export const GET: APIRoute = async ({ site }) => {
	if (!site) throw new Error('The site URL is required to generate the writing feed.');

	const [posts, subcollections] = await Promise.all([
		getWritingPosts(),
		getWritingSubcollections(),
	]);

	return createWritingFeed({ posts, subcollections, site });
};
