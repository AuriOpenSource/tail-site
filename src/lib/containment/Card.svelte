<script lang="ts">
	export let isLink = false;
	export let isRoute = true;
	export let filled = false;
	export let outlined = false;
	export let height = '';
	export let backgroundImage: string | null = null;
	export let backgroundColor: string | null = null;
	export let href: string | null = null;

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
	style:background-image={`url(${backgroundImage})`}
	style:background-color={backgroundColor}
	style:height
	class="card {$$props.class??''}"
	class:card-filled={filled}
	class:card-outlined={outlined}
>
	<slot />
</svelte:element>
