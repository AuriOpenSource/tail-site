<script lang="ts">
	import {Icon} from 'ez-icons';

	export let isLink = false;
	export let isBlock = false;
	export let isRoute = true;
	export let icon: string | null = null;
	export let color: 'primary' | 'secondary' | 'tertiary' = 'primary';
	export let href: string | null = null;
	let element = isLink || href ? 'a' : 'button';

	const a = {
		href,
		rel: 'noreferrer',
		target: isRoute ? '_self' : '_blank'
	};
</script>

<svelte:element
	this={element}
	{...isLink || href ? a : {}}
	class="btn text-label-large fill-on-{color} interactive-bg-{color} {$$props.class??''}"
	class:icon-left={icon}
	class:w-full={isBlock}
>
	{#if icon}
		<Icon width={18} name={icon} />
	{/if}
	<slot />
</svelte:element>
