<script lang="ts">
    import type {PageData} from './$types.js'
    import Card from '$lib/containment/Card.svelte';
    export let data: PageData;
</script>

<ul class="grid gap-1">
    {#each data.components as component}
        <Card isLink href={"/components/" + component.slug} extraclasses="interactive-bg-surface-variant">
            <h1 class="text">{component.slug}</h1>
        </Card>
    {/each}
</ul>


<style>
	ul.grid {
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	}
</style>