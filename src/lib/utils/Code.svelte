<script lang="ts">
	import Card from '$lib/containment/Card.svelte';
	import { getHighlighter, setCDN, setWasm, type IThemeRegistration, type Lang } from 'shiki';
	import { onMount } from 'svelte';

	export let source = '';
	export let lang: Lang = 'js';
	export let theme: IThemeRegistration = 'nord';

	let code = '';
	onMount(async () => {
		const res = await fetch(
			'https://cdn.jsdelivr.net/gh/microsoft/vscode-oniguruma@1.7.0/out/onig.wasm'
		);

		setCDN('https://cdn.jsdelivr.net/gh/shikijs/shiki@0.14.3/packages/shiki/');

		setWasm(res);
		const highlighter = await getHighlighter({
			theme,
			lang,
		});

		code = highlighter.codeToHtml(source, lang);
	});
</script>

<Card filled class="min-h-[14dvh]">
	{@html code}
</Card>