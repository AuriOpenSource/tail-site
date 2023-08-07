import { getHighlighter, setCDN, setWasm, type IThemeRegistration, type Lang } from 'shiki';

interface Code {
	source: string;
	lang: Lang;
	theme: IThemeRegistration;
}

const highlighterPromised = (async () => {
	const res = await fetch(
		'https://cdn.jsdelivr.net/gh/microsoft/vscode-oniguruma@1.7.0/out/onig.wasm'
	);
	setWasm(res);
	setCDN('https://cdn.jsdelivr.net/gh/shikijs/shiki@0.14.3/packages/shiki/');

	return await getHighlighter({
		theme: 'nord',
		langs: ['html', 'css']
	});
})();

const cachedResults: { [key: string]: string } = {};
addEventListener('message', async (e: MessageEvent<Code>) => {
	const { source, lang } = e.data;
	const cacheKey = `${lang}:${source}`;
	const highlighter = await highlighterPromised;
	let code = cachedResults[cacheKey];

	if (!code) {
		code = highlighter.codeToHtml(source.trim(), {
			lang
		});
		cachedResults[cacheKey] = code;
	}

	postMessage(code);
});
