import type { APIRoute, GetStaticPaths } from 'astro';
import { createWritingFeed } from '../../../lib/writing-feed';
import {
	getSubcollectionSlug,
	getSubcollectionSlugs,
	getWritingPosts,
	getWritingSubcollections,
} from '../../../lib/writing';

export const getStaticPaths: GetStaticPaths = async () => {
	const [posts, subcollections] = await Promise.all([
		getWritingPosts(),
		getWritingSubcollections(),
	]);
	return getSubcollectionSlugs(posts, subcollections).map((collection) => ({
		params: { collection },
	}));
};

export const GET: APIRoute = async ({ params, site }) => {
	if (!site) throw new Error('The site URL is required to generate the writing feed.');
	if (!params.collection) throw new Error('A writing subcollection is required.');

	const [allPosts, subcollections] = await Promise.all([
		getWritingPosts(),
		getWritingSubcollections(),
	]);
	const posts = allPosts.filter(
		(post) => getSubcollectionSlug(post) === params.collection,
	);

	return createWritingFeed({
		posts,
		site,
		subcollectionSlug: params.collection,
		subcollections,
	});
};
