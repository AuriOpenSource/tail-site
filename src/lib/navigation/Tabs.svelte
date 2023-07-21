<script lang="ts">
	import type { HTMLAttributes, HTMLInputAttributes } from 'svelte/elements';
	import Icon from '$lib/utils/Icon.svelte';
	import { createEventDispatcher } from 'svelte';

	export let extraWrapperOptions: HTMLAttributes<HTMLDivElement> = {};
	export let style: 'primary' | 'secondary' = 'primary';
	export let items: {
		primaryIcon?: string;
		name: string;
	}[];

	const dispatch = createEventDispatcher<{ navigate: { item: number } }>();
	let activeItem = 0;
	function tab(e: MouseEvent) {
		const el = e.target as HTMLElement;
		dispatch('navigate', { item: parseInt(el.id) });
		activeItem = parseInt(el.id);
	}
</script>

<div
	class="relative border-b-2 border-surface-variant inline-flex {style}"
	{...extraWrapperOptions}
>
	{#each items as item, i}
		<button on:click={tab}>
			<div class="item" class:icon={item.primaryIcon}>
				{#if item.primaryIcon}
					<Icon d={item.primaryIcon} />
				{/if}
				<span id={String(i)} class="text-title-small">{item.name}</span>
			</div>
		</button>
		<!-- <input type="radio" {name} {id} value={i} bind:group={activeItem} {...extraInputOptions} /> -->
	{/each}
	<div
		class="absolute bottom-0 transition-all duration-200"
		style="left: {(100 / items.length) * activeItem}%; width: {100 / items.length}%;"
	>
		<div class="bg-primary" />
	</div>
</div>

<style>
	.item {
		min-width: 5rem;
		height: 3rem;
		flex: 1 0;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		white-space: nowrap;
		background-color: rgb(var(--color-surface));
		--text: var(--color-on-surface-variant);
		color: rgb(var(--text));
		border: none;
		padding: 0 1rem;
		cursor: pointer;
		transition: all 200ms;
		-webkit-tap-highlight-color: transparent;
	}
	.layer {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		transition: all 200ms;
	}
	.item.icon {
		height: 4rem;
	}
	.item :global(svg) {
		width: 1.5rem;
		height: 1.5rem;
	}

	input:focus-visible + .item {
		--text: var(--color-on-surface);
	}
	@media (hover: hover) {
		.item:hover {
			--text: var(--color-on-surface);
		}
		.item:hover > .layer {
			background-color: rgb(var(--text) / 0.08);
		}
	}
	input:focus-visible + .item > .layer,
	.item:active > .layer {
		background-color: rgb(var(--text) / 0.12);
	}
	input:checked + .item {
		--text: var(--color-primary);
	}
	.secondary > .item {
		--text: var(--color-on-surface);
		color: rgb(var(--color-on-surface-variant));
	}
	.secondary > input:checked + .item {
		color: rgb(var(--text));
	}

	.indicatorSpace {
		position: absolute;
		bottom: 0;
		transition: all 200ms;
	}
	.primary .indicator {
		margin: auto;
		width: 3rem;
		height: 3px;
		border-radius: 3px 3px 0 0;
	}
	.secondary .indicator {
		width: 100%;
		height: 2px;
	}

	.indicator {
		background-color: rgb(var(--color-primary));
		print-color-adjust: exact;
		-webkit-print-color-adjust: exact;
	}
	@media screen and (forced-colors: active) {
		input:checked + .item {
			color: selecteditem;
		}
		.indicator {
			background-color: selecteditem;
		}
	}
</style>
