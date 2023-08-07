<script lang="ts">
	import Button from '$lib/action/Button.svelte';
	import Card from '$lib/containment/Card.svelte';
	import Code from '$lib/utils/Code.svelte';
	import pkg from '../../../tail-material-design/package.json';

	const img =
		'https://lh3.googleusercontent.com/BvKj8kuRZqLpqPuuZxOl4IeHv5jaD5kT1jhn3P8EMBcmzyoHRAFXsCxNH6ZeHhQG4V1F_AegXIw2cJIBmETy7eHM27IdLQe7FqEgz6NLaXflHiHM4xyh=w2400-rj';
</script>

<svelte:head>
	<title>Tail Material Design</title>
</svelte:head>

<Card
	backgroundImage={img}
	class="items-center justify-center gap-6 bg-cover"
	filled
	height={'96dvh'}
>
	<div class="chips interactive-bg-primary items-center chips-content capitalize text-label-large">
		current version {pkg.version}
	</div>

	<section class="flex flex-col items-center">
		<h1 class="text-display-large text-primary transition-colors duration-1000">
			Tail Material Design
		</h1>
		<h3 class="text-headline-small text-center">
			Material 3 is the latest version of Google's open-source design system. Design and build
			beautiful, usable products with Material 3.
		</h3>
	</section>

	<Code source={`pnpm add -D tail-material-design`} />
	<Button class="interactive-bg-primary" isLink isRoute href="/get-started">Get Started</Button>
</Card>
