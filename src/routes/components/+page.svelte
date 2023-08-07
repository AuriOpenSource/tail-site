<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/containment/Card.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>Components</title>
</svelte:head>

<Card
	backgroundImage="https://lh3.googleusercontent.com/c99jeUlUnlUjl7U2J3e1V9suxZUao9TxYb93TYU4Ry9eHfg4q3em21KVFHTFcoIpvU2Ubwhs9VgHWzk6cRUnjzQSaRdkDJmZfC5ylmQoXN7ap4DSrQ=w2400-rj"
	class="min-h-[90dvh] justify-center"
>
	<h1 class="text-display-large">Components</h1>
	<p class="text-body-large max-w-xl">
		Components are interactive building blocks for creating a user interface. They can be organized
		into categories based on their purpose: Action, containment, communication, navigation,
		selection, and text input.
	</p>
</Card>

<div class="flex flex-col gap-4">
	<section class="flex flex-col gap-4">
		<div class="pl-4">
			<h1 class="text-display-medium">Actions</h1>
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
	<section class="flex flex-col gap-4">
		<div class="pl-4">
			<h1 class="text-display-medium">Containment</h1>
			<h2 class="text-headline-small">Communication components provide helpful information.</h2>
		</div>
		<ul class="grid gap-1">
			{#each data.components.filter((c) => c.category === 'containment') as component (component.slug)}
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
</div>

<style>
	ul.grid {
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	}
</style>
