import type { PageLoad } from './$types.js';

export const load = (async ({ params, fetch, parent, url }) => {
	const docs = await import(`../../../docs/${params.component}.md`);

	return {
		content: docs.default,
		frontmatter: docs.metadata
	};
}) satisfies PageLoad;
