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
interface ContentType {
	content: string;
	frontmatter: any;
}

function searchAndReplace(content: string, slug: string): string {
	const embed = /{% embed src="(.*?)" title="(.*?)" %}/g;
	const video = /{% video src="(.*?)" %}/g;
	const image = /{% img src="(.*?)" alt="(.*?)" %}/g;
	const youtube = /{% youtube id="(.*?)" title="(.*?)" %}/g;

	return content
		.replace(embed, (_, src, title) => {
			return `
        <iframe
          title="${title}"
          src="${src}"
          loading="lazy"
        ></iframe>
      `.trim();
		})
		.replace(video, (_, src) => {
			return `
        <video controls>
          <source
            src="${config.imagesUrl}/${slug}/images/${src}"
            type="video/mp4"
          />
        </video>
      `.trim();
		})
		.replace(image, (_, src, alt) => {
			return `
      <img
        src="${config.imagesUrl}/${slug}/images/${src}"
        alt="${alt}"
        loading="lazy"
      />
  `.trim();
		})
		.replace(youtube, (_, id, title) => {
			return `
				<lite-youtube videoid="${id}" playlabel="${title}"></lite-youtube>
			`.trim();
		});
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
		.process(searchAndReplace(content, data.slug));

	const processedMarkdown = md.value;

    return {
        content: processedMarkdown as string,
        frontmatter: data as any
    }
}
