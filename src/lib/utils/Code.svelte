<script lang="ts">
	import type { IThemeRegistration, Lang } from 'shiki';
	import { onDestroy, onMount } from 'svelte';
	import codeworker from './codeWorker?worker';

	export let source = '';
	export let lang: Lang = 'html';
	export let theme: IThemeRegistration = 'nord';

	let worker: Worker | null = null;
	let code = '';
	let debounceTimeout: NodeJS.Timeout | undefined = undefined;
	const debounceDelay = 1000;

	function initShiki() {
		worker = new codeworker();
		worker.onmessage = (e) => (code = e.data);
		worker.onerror = (e) => {
			console.error('Syntax highlighting worker error:', e.message);
		};
		worker.postMessage({
			source,
			lang,
			theme
		});

	}

	function updateHighlighting() {
		// Clear any existing timeout.
		clearTimeout(debounceTimeout);
		// Set a new timeout for the debounce delay.
		debounceTimeout = setTimeout(() => {
			worker?.postMessage({
				source,
				lang,
				theme
			});
		}, debounceDelay);
	}

	$: updateHighlighting();
	
	onMount(initShiki);
	onDestroy(() => worker?.terminate());
</script>

<div class="code-wrap">
	{@html code}
</div>
