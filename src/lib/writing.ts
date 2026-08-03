import { getCollection, type CollectionEntry } from 'astro:content';

export type WritingPost = CollectionEntry<'writing'>;
export type WritingSubcollection = CollectionEntry<'writingCollections'>;

export function getSubcollectionSlug(post: WritingPost): string | undefined {
	const segments = post.id.split('/');
	return segments.length === 2 ? segments[0] : undefined;
}

export function getWritingPostUrl(post: WritingPost): string {
	return `/writing/${post.id}/`;
}

export function formatSubcollectionName(slug: string): string {
	return slug
		.split(/[-_]/)
		.filter(Boolean)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export function sortWritingPosts(posts: WritingPost[]): WritingPost[] {
	return [...posts].sort((a, b) => {
		const byDate = b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
		return byDate || a.data.title.localeCompare(b.data.title);
	});
}

export function getSubcollectionTitle(
	slug: string,
	subcollections: WritingSubcollection[] = [],
): string {
	return subcollections.find((collection) => collection.id === slug)?.data.title
		?? formatSubcollectionName(slug);
}

export function getSubcollectionSlugs(
	posts: WritingPost[],
	subcollections: WritingSubcollection[] = [],
): string[] {
	return [
		...new Set([
			...posts
				.map(getSubcollectionSlug)
				.filter((slug): slug is string => Boolean(slug)),
			...subcollections.map((collection) => collection.id),
		]),
	].sort();
}

function validateWritingStructure(
	posts: WritingPost[],
	subcollections: WritingSubcollection[],
): void {
	const standaloneSlugs = new Set<string>();
	const subcollectionSlugs = new Set<string>();

	for (const post of posts) {
		const segments = post.id.split('/');

		if (segments.length > 2) {
			throw new Error(
				`Writing entry “${post.id}” is nested too deeply. Put standalone posts at the root of src/content/writing, or subcollection posts one directory deep.`,
			);
		}

		if (segments.length === 1) {
			standaloneSlugs.add(segments[0]);
		} else {
			subcollectionSlugs.add(segments[0]);
		}
	}

	for (const collection of subcollections) {
		if (collection.id.includes('/')) {
			throw new Error(
				`Writing collection “${collection.id}” is nested too deeply. Put _collection.mdx exactly one directory below src/content/writing.`,
			);
		}
		subcollectionSlugs.add(collection.id);
	}

	for (const slug of subcollectionSlugs) {
		if (standaloneSlugs.has(slug)) {
			throw new Error(
				`Writing URL collision at “/writing/${slug}/”. Rename either the standalone post “${slug}” or the “${slug}” subcollection.`,
			);
		}
	}
}

export async function getWritingSubcollections(): Promise<WritingSubcollection[]> {
	return (await getCollection('writingCollections')).sort((a, b) =>
		a.data.title.localeCompare(b.data.title),
	);
}

export async function getWritingPosts(options: { includeDrafts?: boolean } = {}): Promise<WritingPost[]> {
	const includeDrafts = options.includeDrafts ?? import.meta.env.DEV;
	const [posts, subcollections] = await Promise.all([
		getCollection('writing', ({ data }) => includeDrafts || !data.draft),
		getWritingSubcollections(),
	]);
	validateWritingStructure(posts, subcollections);
	return sortWritingPosts(posts);
}
