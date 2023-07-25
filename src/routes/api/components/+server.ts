import { getPosts } from '$lib/utils/posts';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async () => {
	const posts = await getPosts();

	return json(posts);
}) satisfies RequestHandler;
