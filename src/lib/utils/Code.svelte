<script context="module" lang="ts">
	import _prism from 'prismjs';
	export const prism = _prism;
	export const highlight = _prism.highlightElement;
	export const globalConfig = { transform: (x: any) => x };
</script>

<script lang="ts">
	import 'prism-svelte';
	import { afterUpdate } from 'svelte';
	export let lang = 'javascript';
	export let source = '';
	let element: HTMLElement;
	let formattedCode: string | null;
	export let transform = (x: any) => x;

	function highlightCode() {
		const grammar = prism.languages[lang];
		let body = source || element.textContent;
		body = globalConfig.transform(body);
		body = transform(body);
		formattedCode = lang === 'none' ? body : prism.highlight(body!, grammar, lang);
	}

	afterUpdate(() => {
		highlightCode();
	});

	console.log($$props);
</script>

<code bind:this={element} style="display:none">
	<slot />
</code>

<pre class="language-{lang}" data-output="2-17">
    <code class="language-{lang}">
        {#if lang === 'none'}
            {formattedCode}
        {:else}
            {@html formattedCode}
        {/if}
    </code>
</pre>