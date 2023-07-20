<script lang="ts">
	import Icon from '$lib/utils/Icon.svelte';

	export let isLink = false;
    export let isBlock = false;
	export let isRoute = true;
	export let icon: string | null = null;
	export let color: 'primary' | 'secondary' | 'tertiary' = 'primary';
	export let href: string | null = null;
	let element = isLink ? 'a' : 'button';

	const a = {
        href,
        rel: 'noreferrer',
        target: isRoute ? '_self' : '_blank'
    };
</script>

<svelte:element
	this={element}
	{...isLink ? a : {}}
	class="btn text-label-large fill-on-{color} interactive-bg-{color}"
	class:icon-left={icon}
    class:w-full={isBlock}
>
	{#if icon}
		<Icon width={18} d={icon} />
	{/if}
	<slot />
</svelte:element>