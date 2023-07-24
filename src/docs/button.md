---
title: Common Buttons
description: Common buttons prompt most actions in a UI
lastUpdate: '20/07/2023'
categories: action
published: true
---

<script>
  import Card from '$lib/containment/Card.svelte';
  import Button from '$lib/action/Button.svelte';
</script>

# Heading h1
## Heading h2
### Heading h3

```html {2} showLineNumbers
<script lang="ts">
	import { page } from '$app/stores';

	export let data;

	$: movie = data.movies.find((movie) => movie.id === $page.params.id);
</script>

{#if movie}
<article>
	<div class="poster">
		<a href="/04-movies">
			<img
				class="cover"
				src="{movie.poster_path}"
				alt="{movie.title}"
				data-flip-id="cover-{movie.title}"
			/>
		</a>
	</div>

	<div class="details">
		<h1 class="title" data-flip-id="title-{movie.title}">{movie.title}</h1>
		<p class="overview">{movie.overview}</p>
	</div>
</article>

<div class="backdrop" style:--bg-image="url({movie.backdrop_path})" />
{/if}

<!-- ... -->
```
lorem
lorem
lorem
lorem
lorem
lorem
lorem
lorem
lorem
lorem
lorem
lorem
lorem
lorem
lorem