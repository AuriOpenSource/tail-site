<script lang="ts">
	import { onMount } from 'svelte';
	import type Code__SvelteComponent_ from './Code.svelte';
	import CodeWrapper from './_CodeWrapper.svelte';
	import Card from '$lib/containment/Card.svelte';
	import { htmlToJsx } from './actions';
	import Tabs from '$lib/navigation/Tabs.svelte';
	import { writable } from 'svelte/store';
	import Icon from './Icon.svelte';
	import { fade } from 'svelte/transition';
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
	export let bg: string | null = null;
	export let classes: string | null = null;
	export let responsive = false;

	let wrapper;
	let showContent: 'preview' | 'html' | 'jsx' = 'preview';
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
	<div
		class="text-on-surface-variant"
		id={titleStr}
		bind:this={wrapper}
	>
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

        <hr class="divider my-1 border-outline"/>

		<div class="grid rounded-md overflow-hidden">
			<Tabs
				on:navigate={changeTabs}
				items={[{ name: 'Preview' }, { name: 'HTML' }, { name: 'JSX' }]}
			/>

			{#if showContent == 'preview'}
				<CodeWrapper {bg} {classes} {responsive} {showContent}><slot /></CodeWrapper>
			{/if}

			{#if init && showContent == 'html'}
				<div class="grid">
					<div class="hidden" bind:this={htmlSlot}>
						<slot name="html" />
					</div>
					<div in:fade class="col-start-1 row-start-1">
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
								class=""
								on:click={() => copyText(decodeHtml(htmlSlot.firstElementChild?.innerHTML))}
							>
								{#if isClipboardButtonPressed}
									<Icon d='M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z'/>
								{:else}
                                    <Icon d='M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z'/>
                                {/if}
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
								class="btn btn-square btn-sm btn-neutral"
								on:click={() => copyText(decodeHtml(jsxSlot.firstElementChild?.innerHTML))}
							>
								{#if isClipboardButtonPressed}
									<svg
										class="h-5 w-5 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 32 32"
									>
										<path
											d="M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z"
										/>
									</svg>
								{:else}
									<svg
										class="h-5 w-5 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 32 32"
									>
										<path
											d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z"
										/>
									</svg>
								{/if}
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
		max-width: 100vw;
		overflow-x: auto;
	}
</style>
