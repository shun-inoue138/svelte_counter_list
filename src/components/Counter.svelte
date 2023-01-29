<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	export let index: number;
	export let clickedIndex: number;
	import { counters } from '../store.js';
	let inputEL = null;
	$: if (index === clickedIndex) {
		inputEL.focus();
	}
	const increment = () => {
		$counters[index].count++;
	};
	const decrement = () => {
		if ($counters[index].count === 0) {
			return;
		}
		$counters[index].count--;
	};
	const reset = () => {
		$counters[index].count = 0;
	};
	const deleteCounter = () => {
		$counters = $counters.filter((_, i) => i !== index);
	};
</script>

<div in:fly={{ y: 30 }}>
	<input type="text" bind:value={$counters[index].title} bind:this={inputEL} />
	<span>{$counters[index].count}</span>
	<button on:click={increment}>+</button>
	<button on:click={decrement}>-</button>
	<button on:click={reset}>reset</button>
	<button on:click={deleteCounter}>delete</button>
</div>
