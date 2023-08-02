<script lang="ts">
	import BottomAppbar from '$lib/navigation/BottomAppbar.svelte';
	import Navrail from '$lib/navigation/Navrail.svelte';
	import routes from '$lib/routes.js';
	import '@fontsource/roboto/400.css';
	import '@fontsource/roboto/500.css';
	import '@fontsource/fira-code/400.css';
	import '@fontsource/fira-code/500.css';
	import '../styles/app.css';
	import type { LayoutData } from './$types.js';
	//@ts-ignore
	import { updateTheme } from 'tailwind-material-colors/lib/updateTheme.esm.js';
	export let data: LayoutData;

	function updateThemeOnFab(e: CustomEvent) {
		const color = Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, '0');
		updateTheme(
			{
				primary: `#${color}`
			},
			'class'
		);
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css"
	/>
</svelte:head>
<header>
	<Navrail fab on:fab-click={updateThemeOnFab} currentPath={data.currentPath} items={routes} />
	<BottomAppbar currentPath={data.currentPath} items={routes} />
</header>

<main class="flex-1 p-2 min-h-[100dvh]">
	<slot />
</main>
