<script lang="ts">
	export let lines: 1 | 2 | 3 | null = null;
	export let heading: string | null = null;
	export let description: string | null = null;
</script>

<li
	class="item items-center {$$props.class ?? ''}"
	class:list-lines-1={lines === 1}
	class:list-lines-2={lines === 2}
	class:list-lines-3={lines === 3}
>
	<div class="item-body">
		{#if heading}
			<h2 class="list-heading">{heading}</h2>
		{/if}
		{#if description}
			<p class="list-description">{description}</p>
		{/if}
		<slot />
	</div>
</li>
