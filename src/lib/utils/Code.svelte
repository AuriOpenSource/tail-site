<script context="module" lang="ts">
	import prism from 'prismjs';
	export const highlight = prism.highlightElement;
	export const globalConfig = { transform: (x: string) => x };
</script>

<script lang="ts">
	import 'prism-svelte';
	import { afterUpdate } from 'svelte';
	export let lang = 'javascript';

	let element: HTMLElement;
	let formattedCode: string | null;

	function highlightCode() {
		const grammar = prism.languages[lang];
		let body = element.textContent?.trim();
		body = globalConfig.transform(body ?? '');
		formattedCode = lang === 'none' ? body : prism.highlight(body ?? '', grammar, lang);
	}

	afterUpdate(() => {
		highlightCode();
	});
</script>

<code bind:this={element} style="display:none">
	<slot />
</code>

<pre class="language-{lang}">
    <code class="language-{lang}">
        {#if lang === 'none'}
			{formattedCode}
		{:else}
			{@html formattedCode}
		{/if}
    </code>
</pre>
