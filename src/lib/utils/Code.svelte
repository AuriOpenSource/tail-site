<script lang="ts">
	import { getHighlighter, setCDN, setWasm, type IThemeRegistration, type Lang } from 'shiki';
	import { onMount } from 'svelte';
	import codeworker from './codeWorker?worker';

	export let source = '';
	export let lang: Lang = 'html';
	export let theme: IThemeRegistration = 'nord';

	let worker: Worker;
	let code = '';

	async function initShiki() {
		worker = new codeworker();

		worker.onmessage = ((e) => {
			console.log(e.data, 'Code.svelte');
		});

		worker.postMessage('asdfgg')

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
	}
	onMount(initShiki);
</script>

<div class="code-wrap">
	{@html code}
</div>
