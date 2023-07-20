import type { ComponentsFM } from '$lib/utils/types.js';
import { json } from '@sveltejs/kit';

async function getDocs() {
	const comp: ComponentsFM[] = [];

	const paths = import.meta.glob('/src/docs/*.md', { eager: true });
	
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<ComponentsFM, 'slug'>;
			const post = { ...metadata, slug } satisfies ComponentsFM;
			post.published && comp.push(post);
		}
	}

	return comp;
}

export async function GET() {
	const posts = await getDocs();
	return json(posts);
}
