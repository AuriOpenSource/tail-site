import { getHighlighter, setCDN, setWasm, type IThemeRegistration, type Lang } from 'shiki';

interface Code {
	source: string;
	lang: Lang;
	theme: IThemeRegistration;
}

addEventListener('message', async (e: MessageEvent<Code>) => {
	const { source, lang, theme } = e.data;
	let code = '';

	const res = await fetch(
		'https://cdn.jsdelivr.net/gh/microsoft/vscode-oniguruma@1.7.0/out/onig.wasm'
	);
	setWasm(res);
	setCDN('https://cdn.jsdelivr.net/gh/shikijs/shiki@0.14.3/packages/shiki/');

	const highlighter = await getHighlighter({
		theme,
		langs: ['html', 'css']
	});
	code = highlighter.codeToHtml(source.trim(), {
		lang
	});

	postMessage(code);
});
