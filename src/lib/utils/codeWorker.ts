import { getHighlighter, setCDN, setWasm } from 'shiki';


self.addEventListener('message', async (e) => {
    const { source, lang, theme } = e.data;

    let code = '';

    const res = await fetch(
        'https://cdn.jsdelivr.net/gh/microsoft/vscode-oniguruma@1.7.0/out/onig.wasm'
    );

    setCDN('https://cdn.jsdelivr.net/gh/shikijs/shiki@0.14.3/packages/shiki/');

    setWasm(res);
    const highlighter = await getHighlighter({
        theme,
        langs: ['html', 'css']
    });
    code = highlighter.codeToHtml(source.trim(), lang);


    self.postMessage(code);
})
