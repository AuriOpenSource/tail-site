<script>
	import {List} from "$lib/containment/list";
	import ListItem from "$lib/containment/list/ListItem.svelte";

	export let data;

    const arr = data.currentPath.split('');
</script>