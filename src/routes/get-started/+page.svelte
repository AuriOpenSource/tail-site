<script>
	import Card from '$lib/containment/Card.svelte';
	import List from '$lib/containment/list/List.svelte';
	import ListItem from '$lib/containment/list/ListItem.svelte';
	import Code from '$lib/utils/Code.svelte';
</script>

<Card>
	<p>
		Tail Material Design is a comprehensive library that brings the power of Material Design to
		Tailwind CSS. With Tail Material Design, you can easily add modern and visually appealing
		Material Design styles to your web projects. The library provides pre-defined styles for various
		components, allowing you to accelerate development and create aesthetically pleasing web apps.
	</p>
</Card>

<Card>
	<h1>Installing it</h1>

	<p>To get started with Tail Material Design, follow these steps:</p>
	<List>
		<ListItem lines={1}>Install Tailwind CSS in your project (if not already installed)</ListItem>
		<ListItem heading="Install Tail Material Design using your preferred package manager:">
			<Code
				source={`
			pnpm add -D tail-material-design
			`}
			/>
		</ListItem>
		<ListItem
			heading="Import and configure Tail Material Design in your Tailwind CSS configuration file (typically named tailwind.config.js):"
		>
			<Code
			lang="javascript"
				source={`
			import tmd from 'tail-material-design';
import type { Config } from 'tailwindcss';

export default {
    plugins: [tmd]
    // rest of your config...
} satisfies Config;
			`}
			/>
		</ListItem>
		<ListItem heading="Optional if you don't want to use tailwindcss, you can still use the components from a CDN:">
			<div class="flex flex-col gap-2">
				<Code source={`
					<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tail-material-design/dist/components/<COMPONENT_NAME>.min.css">
<!-- or you can use the link with all components -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tail-material-design/dist/components.min.css">
				   `}/>
				   <Code lang="css" source={`
				   /* As an alternative, you can install the package and import on your css file */
@import url("https://cdn.jsdelivr.net/npm/tail-material-design/dist/components.min.css")
				   `}/>
			</div>
		</ListItem>
	</List>
</Card>
