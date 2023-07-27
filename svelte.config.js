import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { escapeSvelte, mdsvex } from 'mdsvex';
import rehypeCodeTitle from 'rehype-code-titles';
import rehypePrismPlus from 'rehype-prism-plus';
import parseHtmlAndMarkdown from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import remarkGFM from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkUnwrapImages from 'remark-unwrap-images';
import { createShikiHighlighter } from 'shiki-twoslash';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	smartypants: true,
	// @ts-expect-error sss
	remarkPlugins: [remarkGFM, remarkUnwrapImages, [remarkToc, { tight: true }]],
	// @ts-expect-error sss
	rehypePlugins: [parseHtmlAndMarkdown, rehypeSlug, rehypeCodeTitle, rehypePrismPlus],
	highlight: {
		highlighter: async (code, lang) => {
			const highlighter = await createShikiHighlighter({ theme: 'github-dark' });

			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));

			return `{@html \`${html}\` }`;
		}
	}
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
