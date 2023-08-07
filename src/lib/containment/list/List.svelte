<script lang="ts">
	export let isUl = true;

	type T = $$Generic;
	export let list: T[] = [];
	let tag = isUl ? 'ul' : 'ol';
</script>

<svelte:element this={tag} class="list {$$props.class ?? ''}">
	<slot name="list-description" />
	{#if list.length > 0}
		{#each list as item, i (i)}
			<slot {item} />
		{/each}
	{:else}
		<slot />
	{/if}
</svelte:element>
