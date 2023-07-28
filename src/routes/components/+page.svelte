<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/containment/Card.svelte';
	export let data: PageData;
</script>

<section class="flex flex-col gap-4">
	<div class="pl-4">
		<h1 class="text-display-large">Actions</h1>
		<h2 class="text-headline-small">Action components help people achieve an aim.</h2>
	</div>
	<ul class="grid gap-1">
		{#each data.components.filter((c) => c.category === 'action') as component (component.slug)}
			<Card
				isLink
				href={'/components/' + component.slug}
				class="bg-surface-variant/30 hover:bg-surface-variant-hover/30 text-on-surface-variant gap-2"
			>
				<figure style="background-color: #{component.color};" class="-mx-4 -mt-4 rounded-b-2xl">
					<img src={component.thumbImage} alt="as" />
				</figure>
				<section class="py-4">
					<h1 class="text-title-large">{component.title}</h1>
					<h2 class="text-body-large">{component.description}</h2>
				</section>
			</Card>
		{/each}
	</ul>
</section>

<style>
	ul.grid {
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	}
</style>
