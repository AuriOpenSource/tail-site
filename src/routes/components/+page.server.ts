import type { ComponentsFM } from '$lib/utils/types.js';
import type { PageServerLoad } from './$types';
import { resolve } from 'path';
import { readFile } from 'fs/promises';
export const prerender = true;

export const load = (async () => {
	const metaPath = resolve('./src/meta.json');
	const meta = await readFile(metaPath, { encoding: 'utf-8' });
	return { components: JSON.parse(meta) as ComponentsFM[] };
}) satisfies PageServerLoad;
