import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex, escapeSvelte } from 'mdsvex';
import {createShikiHighlighter} from 'shiki-twoslash'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  smartypants: true,
  remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug],
  highlight: {
    highlighter: async (code, lang) => {
      const highlighter = await createShikiHighlighter({theme: 'github-dark'});

      const html = escapeSvelte(highlighter.codeToHtml(code, {lang}));

      return `{@html \`${html}\` }`
    }
  }
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  kit: {
    adapter: adapter()
  },
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};
export default config;