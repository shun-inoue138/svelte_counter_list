<script lang="ts">
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	export let index: number;
	type FocusIndexEvent = {
		focusIndex: {
			index: number;
		};
	};
	const dispatch = createEventDispatcher<FocusIndexEvent>();
</script>

<li in:fly={{ x: -20 }} class="text-xs bg-black rounded-md text-white py-1 px-3">
	<button on:click={() => dispatch('focusIndex', { index })}>
		<slot />
	</button>
</li>
