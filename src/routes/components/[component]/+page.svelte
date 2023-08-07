<script lang="ts">
	import Button from '$lib/action/Button.svelte';
	import Card from '$lib/containment/Card.svelte';
	import { formatDate } from '$lib/utils';
	import { onMount } from 'svelte';
//@ts-expect-error no d.ts
	import { updateTheme } from 'tailwind-material-colors/lib/updateTheme.esm';
	import type { PageData } from './$types';

	export let data: PageData;
	const { frontmatter } = data;
	onMount(() => {
		updateTheme(
			{
				primary: `#${frontmatter.color}` 
			},
			'class'
		);
	});
</script>

<svelte:head>
	<title>{data.frontmatter.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.frontmatter.title} />
</svelte:head>

<header class="flex flex-col md:flex-row gap-2 h-[70dvh]">
	<Card filled class="md:w-1/2 items-center justify-center">
		<hgroup class="h-[50dvh] md:h-auto">
			<h1 class="text-display-large">{frontmatter.title}</h1>
			<h3 class="text-title-medium">{frontmatter.description}</h3>
			<h2 class="text-title-small">Last Update {formatDate(frontmatter.lastUpdate)}</h2>
		</hgroup>
	</Card>
	<Card filled class="md:w-1/2">
		<figure class="-mb-4 -mt-16">
			<img class="object-cover" src={frontmatter.posterImage} alt="ss" />
		</figure>
	</Card>
</header>

<section class="capitalize flex flex-row w-full justify-center my-4">
	<ul class="capitalize flex flex-row bg-tertiary/70 p-1 gap-1 rounded-full">
		{#each ['overview', 'usage'] as hashes}
			<li>
				<Button href={'#' + hashes} extraClasses="interactive-bg-secondary icon-left">
					{hashes}
				</Button>
			</li>
		{/each}
	</ul>
</section>

<div class="prose w-full md:max-w-[60dvw]">
	<svelte:component this={data.content}></svelte:component>
</div>
