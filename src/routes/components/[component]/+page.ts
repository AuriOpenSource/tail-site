import type { Component } from '$lib/utils/types.js';
import type { PageLoad } from './$types.js';

export const load = (async ({ params, fetch, parent }) => {
	const {components} = await parent();
	console.log(components);
	
	const res = await fetch('/api/components/' + params.component);
	const { content, frontmatter } = await res.json();
	return {
		content: content as string,
		frontmatter: frontmatter as Component
	};
}) satisfies PageLoad;
