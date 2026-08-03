import rss from '@astrojs/rss';
import type { WritingPost, WritingSubcollection } from './writing';
import {
	getSubcollectionSlug,
	getSubcollectionTitle,
	getWritingPostUrl,
} from './writing';

function makeContentPortable(html: string, postUrl: URL): string {
	return html.replace(
		/\b(href|src)=(['"])([^'"]+)\2/gi,
		(match, attribute: string, quote: string, value: string) => {
			if (/^(?:[a-z][a-z\d+.-]*:|#|\/\/)/i.test(value)) return match;
			return `${attribute}=${quote}${new URL(value, postUrl).href}${quote}`;
		},
	);
}

export function createWritingFeed({
	posts,
	site,
	subcollectionSlug,
	subcollections = [],
}: {
	posts: WritingPost[];
	site: URL;
	subcollectionSlug?: string;
	subcollections?: WritingSubcollection[];
}) {
	const subcollection = subcollectionSlug
		? subcollections.find(({ id }) => id === subcollectionSlug)
		: undefined;
	const subcollectionName = subcollectionSlug
		? getSubcollectionTitle(subcollectionSlug, subcollections)
		: undefined;
	const homePath = subcollectionSlug ? `/writing/${subcollectionSlug}/` : '/writing/';

	return rss({
		title: subcollectionName
			? `${subcollectionName} — Writing by Idan Gazit`
			: 'Writing by Idan Gazit',
		description: subcollection?.data.description
			?? (subcollectionName
				? `Updates and notes from ${subcollectionName}.`
				: 'Notes on design, technology, and making things by Idan Gazit.'),
		site: new URL(homePath, site),
		customData: '<language>en-us</language>',
		items: posts.map((post) => {
			const link = getWritingPostUrl(post);
			const html = post.rendered?.html;
			const subcollectionSlug = getSubcollectionSlug(post);

			return {
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.pubDate,
				link,
				content: html
					? makeContentPortable(html, new URL(link, site))
					: undefined,
				categories: subcollectionSlug ? [getSubcollectionTitle(subcollectionSlug, subcollections)] : undefined,
			};
		}),
	});
}
