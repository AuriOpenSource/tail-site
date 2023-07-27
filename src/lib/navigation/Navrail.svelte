<script lang="ts">
	import Fab from '$lib/action/Fab.svelte';
	import Icon from '$lib/utils/Icon.svelte';
	import icon from '$lib/utils/icons.js';
	import type { NavrailTypes, Routes } from '$lib/utils/types.js';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let menu = false;
	export let fab = false;
	export let currentPath: string | null = null;
	export let items: Routes = [];

	let hidden = true;
</script>

<nav class="navrail hidden md:block" class:relative={menu}>
	{#if menu || fab}
		<section class="fill-on-surface navrail-menu">
			{#if menu}
				<button on:click={() => (hidden = !hidden)} class="icon-btn-container">
					<span class="icon-btn">
						<Icon d={icon.menu} />
					</span>
				</button>
			{/if}
			{#if fab}
				<Fab on:click={(event) => dispatch('fab-click', event)} />
			{/if}
		</section>
	{/if}
	<ul class="navrail-list">
		{#each items as { name, href, icon }, index (index)}
			<a class="group navrail-item" {href}>
				<div
					class:pill-active={currentPath === href || currentPath?.startsWith(`${href}/`)}
					class="group-hover:bg-secondary-container-hover navrail-pill"
				>
					<span class="navrail-icon group-hover:fill-on-secondary-container">
						<Icon
							d={currentPath === href || currentPath?.startsWith(`${href}/`)
								? icon.outline
								: icon.filled}
						/>
					</span>
				</div>

				<span class="navrail-item-title text-label-small">
					{name}
				</span>
			</a>
		{/each}
	</ul>
</nav>

<style>
	.pill-active {
		background-color: rgb(var(--color-secondary-container));
	}
</style>
