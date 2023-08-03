import type { Metadata } from '$lib/utils/types.js';
import type { PageLoad } from './$types';

export const load = (async ({fetch}) => {
	const res = await fetch('/api/components');

	return { components: (await res.json()) as Metadata[] };
}) satisfies PageLoad;
