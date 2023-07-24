<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	console.log(data);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="prose">
	<svelte:component this={data.content} />
</article>
