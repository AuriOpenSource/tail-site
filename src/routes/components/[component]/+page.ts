import type { ComponentsFM } from '$lib/utils/types.js';
import type { SvelteComponent } from 'svelte';
import type { PageLoad } from './$types.js';

export const load = (async ({ params }) => {
	const comp = await import(`../../../docs/${params.component}.md`);

	return {
		content: comp.default as SvelteComponent,
		meta: comp.metadata as ComponentsFM
	};
}) satisfies PageLoad;
