import { getPost } from '$lib/utils/posts';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ params }) => {
	const post = await getPost(params.component);

	return json(post);
}) satisfies RequestHandler;
