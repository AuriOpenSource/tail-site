import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Metadata } from '$lib/utils/types';

interface File {
	default: Record<string, any>;
	metadata:Metadata;
}

export const GET = (async () => {
	const posts: Metadata[] = [];
	const paths = import.meta.glob<true, string, File>('/src/docs/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		posts.push(file.metadata)
	}

	return json(posts);
}) satisfies RequestHandler;
