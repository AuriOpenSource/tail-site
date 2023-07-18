<script lang="ts">
	export let filled = false;
	export let outlined = false;
	export let height = '';
    export let backgroundImage: string | null = null;
	export let extraclasses = '';
</script>

<section 
    style='background-image: url({backgroundImage});'
    style:height 
    class="card {extraclasses}" 
    class:card-filled={filled} 
    class:card-outlined={outlined}
    >
	<slot />
</section>
