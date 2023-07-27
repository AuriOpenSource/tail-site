<script lang="ts">
	export let isLink = false;
	export let isRoute = true;
	export let filled = false;
	export let outlined = false;
	export let height = '';
	export let href: string | null = null;
	export let backgroundImage = '';
	export let backgroundColor = '';
	export let extraclasses = '';

	let tag = isLink ? 'a' : 'section';

	const a = {
		href,
		rel: 'noreferrer',
		target: isRoute ? '_self' : '_blank'
	};
</script>

<svelte:element
	this={tag}
	{...isLink ? a : {}}
	style="background-image: url({backgroundImage}); background-color: {backgroundColor}"
	style:height
	class="card {extraclasses}"
	class:card-filled={filled}
	class:card-outlined={outlined}
>
	<slot />
</svelte:element>
