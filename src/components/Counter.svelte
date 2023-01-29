<script lang="ts">
	export let index: number;
	import { counters } from '../store.js';
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

<div>
	<input type="text" bind:value={$counters[index].title} />
	<span>{$counters[index].count}</span>
	<button on:click={increment}>+</button>
	<button on:click={decrement}>-</button>
	<button on:click={reset}>reset</button>
	<button on:click={deleteCounter}>delete</button>
</div>
