<script lang="ts">
	import Card from '$lib/containment/Card.svelte';
	import Component from '$lib/utils/Component.svelte';
	import { replace } from '$lib/utils/actions';
	import { prefix } from '$lib/utils/store';
	const img =
		'https://lh3.googleusercontent.com/BvKj8kuRZqLpqPuuZxOl4IeHv5jaD5kT1jhn3P8EMBcmzyoHRAFXsCxNH6ZeHhQG4V1F_AegXIw2cJIBmETy7eHM27IdLQe7FqEgz6NLaXflHiHM4xyh=w2400-rj';
</script>

<!-- <Card
	backgroundImage={img}
	extraclasses="items-center justify-center bg-cover"
	filled
	height={'70dvh'}
>
	<h1 class="text-display-large text-primary transition-colors duration-1000">
		Tail Material Design
	</h1>
	<h3 class="text-headline-small text-center">
		Material 3 is the latest version of Google’s open-source design system. Design and build
		beautiful, usable products with Material 3.
	</h3>
</Card> -->

<div class="grid gap-2">
	<Component title="Button">
		<button class="btn">Button</button>
		<pre slot="html" use:replace={{ to: $prefix }}>{`<button class="$$btn">Button</button>`}</pre>
	</Component>

	<Component title="Buttons with brand colors">
		<button class="btn">Button Structure</button>
		<button class="btn btn-filled">Filled</button>
		<button class="btn btn-outlined">Outlined</button>
		<button class="btn interactive-bg-tertiary">Custom</button>
		<pre slot="html" use:replace={{ to: $prefix }}>{
		`<button class="btn">Button Structure</button>
		<button class="btn btn-filled">Filled</button>
		<button class="btn btn-outlined">Outlined</button>
		<button class="btn interactive-bg-tertiary">Custom</button>`
		}</pre>
	</Component>
</div>

<style>
	div.grid {
		grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
	}
</style>
