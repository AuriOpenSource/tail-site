import type { LayoutServerLoad } from './$types';

export const load = (async ({ url }) => ({
	currentPath: url.pathname
})) satisfies LayoutServerLoad;
