import { readdir, readFile } from 'fs/promises';
import { resolve, join } from 'path';
import matter from 'gray-matter';
import { markdownToHTML } from './markdown';
import type { ComponentsFM } from '$lib/utils/types';

export async function fetchJSON(url: string, fetchFn = fetch) {
	const response = await fetchFn(url);
	if (!response.ok) throw new Error(`Error fetching JSON from ${response.url}`);
	return await response.json();
}

async function parseMarkdownFiles() {
	try {
		const posts: ComponentsFM[] = [];
		const postsPath = resolve('src/docs');
		
		const folders = await readdir(postsPath);
		
		for (const folder of folders) {
			const markdownFilePath = join(postsPath, folder);
			const markdownContent = await readFile(markdownFilePath, 'utf-8');
			const { data } = matter(markdownContent);

			if (data.published) {
				posts.push(data as ComponentsFM);
			}
		}

		return posts;
	} catch (e) {
		throw new Error(e);
	}
}

async function parseMarkdownFile(slug: string) {
	try {
		const postPath = resolve(`src/docs/${slug}.md`);
		const markdownContent = await readFile(postPath, 'utf-8');
		return markdownToHTML(markdownContent);
	} catch (e) {
		throw new Error(e);
	}
}

export async function getPosts() {
	return await parseMarkdownFiles();
}

export async function getPost(slug: string) {
	return parseMarkdownFile(slug);
}
