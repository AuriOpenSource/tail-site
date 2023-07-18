import type { LayoutLoad } from './$types.js';

export const load = (async ({ url }) => ({
	currentPath: url.pathname
})) satisfies LayoutLoad;
