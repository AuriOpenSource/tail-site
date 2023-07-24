<script lang="ts">
	interface Polygon {
		d: string;
		points: string;
	}

	export let d: string | Polygon = '';
	export let width = 24;
	export let height = width;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	height={height + 'px'}
	width={width + 'px'}
	viewBox="0 0 24 24"
>
	{#if typeof d === 'string'}
		<path {d} />
	{:else}
		<g>
			<path d={d.d} />
			<polygon points={d.points} />
		</g>
	{/if}
</svg>
