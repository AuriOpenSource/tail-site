<script lang="ts">
	import Card from '$lib/containment/Card.svelte';
	import Tabs from '$lib/navigation/Tabs.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import type Code__SvelteComponent_ from './Code.svelte';
	import Icon from './Icon.svelte';
	import { htmlToJsx } from './actions';
	import icons from './icons';

	let Code: typeof Code__SvelteComponent_;
	let init = false;
	onMount(async () => {
		Code = (await import('./Code.svelte')).default;
		init = true;

		if (document.getElementById(location.hash.slice(1)) && location.hash.slice(1) == titleStr) {
			document.getElementById(location.hash.slice(1))?.click();
		}
	});

	let isClipboardButtonPressed = false;
	function copyText(text: string) {
		navigator.clipboard.writeText(text);
		isClipboardButtonPressed = true;
		setTimeout(() => {
			isClipboardButtonPressed = false;
		}, 2000);
	}

	export let title: string | null = null;
	export let desc: string | null = null;
	export let responsive = false;

	let showContent: 'preview' | 'html' | 'jsx' = 'html';
	let htmlSlot: HTMLDivElement;
	let jsxSlot: HTMLDivElement;

	function decodeHtml(html: string | undefined) {
		const txt = document.createElement('textarea');
		txt.innerHTML = html ?? '';
		return txt.value;
	}

	$: titleStr = title
		? title
				.replace(/[ ]/g, '-') // replace spaces with -
				.replace(/[^A-Za-z0-9-]/g, '') // replace all non-alphanumeric chars
				.toLowerCase()
		: '';

	function changeTabs(e: CustomEvent<{ item: number }>) {
		console.log(e.detail.item);

		switch (e.detail.item) {
			case 0:
				showContent = 'preview';
				break;
			case 1:
				showContent = 'html';
				break;
			case 2:
				showContent = 'jsx';
				break;
			default:
				showContent = 'preview';
		}
	}
</script>

<Card filled>
	<div class="text-on-surface-variant" id={titleStr}>
		{#if title}
			<div class="inline-flex items-center gap-2">
				<a class="text-label-large hover:opacity-60" href={`#${titleStr}`}>#</a>
				<span class="text-title-large">{title}</span>
			</div>
		{/if}
		{#if desc}
			<div class="pb-2 text-xs opacity-70">
				{desc}
			</div>
		{/if}

		<hr class="divider my-1 border-outline" />

		<div class="grid rounded-md overflow-hidden">
			<Tabs
				on:navigate={changeTabs}
				items={[{ name: 'Preview' }, { name: 'HTML' }, { name: 'JSX' }]}
			/>

			{#if showContent == 'preview'}
				<div in:fade class="bg-surface relative overflow-x-auto">
					<div
						class="flex min-h-[4rem] min-w-[18rem] items-center justify-center flex-wrap gap-2 overflow-x-hidden p-2"
						class:resize-x={responsive}
					>
						<slot />
					</div>
				</div>
			{/if}

			{#if init && showContent == 'html'}
				<div class="grid">
					<div class="hidden" bind:this={htmlSlot}>
						<slot name="html" />
					</div>
					<div in:fade class="code-wrapper col-start-1 row-start-1">
						<svelte:component this={Code} lang="html">
							<slot name="html" />
						</svelte:component>
					</div>
					<div class="col-start-1 row-start-1 flex items-start justify-end p-2">
						<div
							data-tip={isClipboardButtonPressed ? 'copied' : 'copy'}
							class="tooltip tooltip-left tooltip-accent"
						>
							<button
								class="icon-btn-container fill-on-surface"
								on:click={() => copyText(decodeHtml(htmlSlot.firstElementChild?.innerHTML))}
							>
								<span class="icon-btn">
									{#if isClipboardButtonPressed}
										<Icon
											d={{
												d: icons.clipboardPressed.d,
												points: icons.clipboardPressed.points
											}}
										/>
									{:else}
										<Icon d={icons.clipboard} />
									{/if}
								</span>
							</button>
						</div>
					</div>
				</div>
			{/if}
			{#if init && showContent == 'jsx'}
				<div class="grid">
					<div class="hidden" bind:this={jsxSlot}>
						{#if $$slots.jsx}
							<pre use:htmlToJsx><slot name="jsx" /></pre>
						{:else}
							<pre use:htmlToJsx><slot name="html" /></pre>
						{/if}
					</div>
					<div in:fade class="code-wrapper col-start-1 row-start-1">
						<svelte:component this={Code} lang="svelte">
							<div use:htmlToJsx>
								{#if $$slots.jsx}
									<slot name="jsx" />
								{:else}
									<slot name="html" />
								{/if}
							</div>
						</svelte:component>
					</div>
					<div class="col-start-1 row-start-1 flex items-start justify-end p-2">
						<div
							data-tip={isClipboardButtonPressed ? 'copied' : 'copy'}
							class="tooltip tooltip-left tooltip-accent"
						>
							<button
								class="icon-btn-container fill-on-surface"
								on:click={() => copyText(decodeHtml(jsxSlot.firstElementChild?.innerHTML))}
							>
								<span class="icon-btn">
									{#if isClipboardButtonPressed}
										<Icon
											d={{
												d: icons.clipboardPressed.d,
												points: icons.clipboardPressed.points
											}}
										/>
									{:else}
										<Icon d={icons.clipboard} />
									{/if}
								</span>
							</button>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</Card>

<style>
	.code-wrapper {
		max-width: 100dvw;
		overflow-x: auto;
	}
</style>
