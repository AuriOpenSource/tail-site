import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import remarkSmartypants from 'remark-smartypants';
import remarkToc from 'remark-toc';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md', '.mdx'],
	layout: {
		_: './src/mdsvex.svelte'
	},
	remarkPlugins: [remarkGfm, remarkSlug, remarkSmartypants, [remarkToc, { tight: true }]],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter()
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};
export default config;
