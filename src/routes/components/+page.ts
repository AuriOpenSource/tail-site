import type { ComponentsFM } from '$lib/utils/types.js';
import type { PageLoad } from './$types.js';

export const load = (async ({ fetch }) => {
	const response = await fetch('api/components');
	const components = await response.json() as ComponentsFM[];
	return { components };
}) satisfies PageLoad;
