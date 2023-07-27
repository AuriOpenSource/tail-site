import type { ComponentsFM } from '$lib/utils/types.js';
import type { PageLoad } from './$types';

export const prerender = true;

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/components');
	const components = (await response.json()) as ComponentsFM[];

	console.log(components);

	return { components };
}) satisfies PageLoad;
