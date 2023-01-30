<script lang="ts">
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	export let index: number;
	const dispatch = createEventDispatcher();
</script>

<li in:fly={{ x: -20 }} class="text-xs bg-black rounded-md text-white py-1 px-3">
	<button on:click={() => dispatch('focus', { index })}>
		<slot />
	</button>
</li>
