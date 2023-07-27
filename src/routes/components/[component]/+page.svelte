<script lang="ts">
	//@ts-expect-error no d.ts
	import { updateTheme } from 'tailwind-material-colors/lib/updateTheme.esm';
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import Card from '$lib/containment/Card.svelte';
	import Button from '$lib/action/Button.svelte';
	export let data: PageData;

	const { content, frontmatter } = data;

	onMount(() => {
		updateTheme(
			{
				primary: '#3e4a36'
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

<header class="flex flex-row gap-2 h-[70dvh]">
	<Card filled extraclasses="w-1/2 items-center justify-center">
		<hgroup>
			<h1 class="text-display-large">{frontmatter.title}</h1>
			<h2 class="text-title-medium">Last Update {formatDate(frontmatter.lastUpdate)}</h2>
		</hgroup>
	</Card>
	<Card filled extraclasses="w-1/2">
		<figure class="-mb-4 -mt-16">
			<img src={frontmatter.posterImage} alt="ss" />
		</figure>
	</Card>
</header>

<ul class="capitalize flex flex-row gap-1 w-full justify-center my-4">
	{#each ['overview', 'specs', 'guidelines', 'accessibility'] as hashes}
		<li>
			<Button href={'#' + hashes} extraClasses="interactive-bg-primary-container">{hashes}</Button>
		</li>
	{/each}
</ul>

<article class="prose">
	{@html content}
</article>
