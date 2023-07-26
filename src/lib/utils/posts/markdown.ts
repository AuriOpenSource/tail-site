import matter from 'gray-matter';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import parseHtmlAndMarkdown from 'rehype-raw';
import toHtml from 'rehype-stringify';
import remarkHeadings from 'remark-autolink-headings';
import remarkGfm from 'remark-gfm';
import fromMarkdown from 'remark-parse';
import fromMarkdownToHtml from 'remark-rehype';
import remarkSlug from 'remark-slug';
import remarkSmartypants from 'remark-smartypants';
import remarkTableofContents from 'remark-toc';
import { unified } from 'unified';
import { rehypeCopyCode, rehypeUnwrapImages } from './plugins';
import type { Component } from '../types';

interface ContentType {
	content: string;
	frontmatter: Component;
}

export async function markdownToHTML(markdown: string): Promise<ContentType> {
	const { content, data } = matter(markdown);

	const md = await unified()
		.use(fromMarkdown)
		.use([
			remarkGfm,
			remarkHeadings,
			remarkSlug,
			remarkSmartypants,
			[remarkTableofContents, { tight: true }]
		])
		.use(fromMarkdownToHtml, { allowDangerousHtml: true })
		.use(rehypeCodeTitles)
		.use(rehypePrism)
		.use(parseHtmlAndMarkdown)
		.use(rehypeUnwrapImages)
		.use(rehypeCopyCode)
		.use(toHtml)
		.process(content);

	const processedMarkdown = md.value;

	return {
		content: processedMarkdown as string,
		frontmatter: data as Component
	};
}
