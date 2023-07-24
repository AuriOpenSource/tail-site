<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import type Code__SvelteComponent_ from './Code.svelte';
	let Code: typeof Code__SvelteComponent_;
	let init = false;
	onMount(async () => {
		Code = (await import('./Code.svelte')).default;
		init = true;
	});

	export let responsive = false;
	export let classes = '';
	export let showContent: 'preview' | 'html' | 'jsx' = 'preview';
</script>

{#if showContent === 'preview'}
	<div transition:fade class="bg-surface relative overflow-x-auto">
		<div
			class="flex min-h-[4rem] min-w-[18rem] flex-wrap gap-2 overflow-x-hidden p-2 {classes}"
			class:resize-x={responsive}
		>
			<slot />
		</div>
	</div>
{/if}
