<script lang="ts">
	import type { IThemeRegistration, Lang } from 'shiki';
	import { onMount } from 'svelte';
	import codeworker from './codeWorker?worker';

	export let source = '';
	export let lang: Lang = 'html';
	export let theme: IThemeRegistration = 'nord';

	let worker: Worker;
	let code = '';

	function initShiki() {
		worker = new codeworker();

		worker.onmessage = (e) => {
			code = e.data;
		};

		worker.postMessage({
			source,
			lang,
			theme
		});
	}
	onMount(initShiki);
</script>

<div class="code-wrap">
	{@html code}
</div>
