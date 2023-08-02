<script lang="ts">
	import type { IThemeRegistration, Lang } from 'shiki';
	import { onMount } from 'svelte';
	import codeworker from './codeWorker?worker';

	export let source = '';
	export let lang: Lang = 'html';
	export let theme: IThemeRegistration = 'nord';

	let worker: Worker;
	let code = '';
	let init = false;

	function initShiki() {
		worker = new codeworker();
		worker.onmessage = (e) => (code = e.data);
		worker.postMessage({
			source,
			lang,
			theme
		});

		init != init;
	}
	onMount(initShiki);
</script>

<div class="code-wrap md:max-w-[60dvw] {init ? 'grid-rows-[0fr]' : 'grid-rows-1'}">
	{@html code}
</div>
