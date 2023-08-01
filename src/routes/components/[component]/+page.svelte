<script lang="ts">
	import Button from '$lib/action/Button.svelte';
	import Card from '$lib/containment/Card.svelte';
	import { formatDate } from '$lib/utils';
	import { onMount } from 'svelte';
	//@ts-expect-error no d.ts
	import { updateTheme } from 'tailwind-material-colors/lib/updateTheme.esm';
	import type { PageData } from './$types';
	import Code from '$lib/utils/Code.svelte';

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
		{#each ['overview', 'specs', 'guidelines', 'accessibility'] as hashes}
			<li>
				<Button href={'#' + hashes} extraClasses="interactive-bg-secondary icon-left">
					{hashes}
				</Button>
			</li>
		{/each}
	</ul>
</section>

<Code
	source={`
<button class="btn btn-filled icon-left">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 0 24 24"
		width="24px"
		fill="#000000"
	>
		<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
	</svg>
	Filled
</button>

<button class="btn btn-outlined icon-left">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 0 24 24"
		width="24px"
		fill="#000000"
	>
		<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
	</svg>
	Outlined
</button>

<button class="btn bg-teal-500 bg-teal-950 icon-left">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 0 24 24"
		width="24px"
		fill="#000000"
	>
		<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
	</svg>
	Custom
</button>
`}
/>

<article class="prose">
	{@html content}
</article>
