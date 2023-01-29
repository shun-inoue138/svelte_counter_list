<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	export let index: number;
	export let clickedIndex: number;
	import { counters } from '../store.js';
	import Icon from '@Iconify/svelte';
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

<div
	in:fly={{ y: 30 }}
	class="px-4 py-2 bg-slate-400 mb-2 w-2/3 mx-auto shadow-2xl rounded-md flex gap-3 items-center"
>
	<label>
		<p class="text-left">タイトル</p>
		<input
			type="text"
			bind:value={$counters[index].title}
			bind:this={inputEL}
			class="rounded-md py-2 px-4"
			placeholder="titleを入力してください"
		/>
	</label>
	<div>
		<p>現在の数値</p>
		<span class="text-white text-xl">{$counters[index].count}</span>
	</div>
	<div class="ml-auto flex items-center gap-1">
		<button on:click={increment}>
			<Icon icon="mdi:increment" width="50" height="50" color="blue" />
		</button>
		<button on:click={decrement}>
			<Icon icon="mdi:decrement" width="50" height="50" color="red" />
		</button>
		<button on:click={reset} class="ml-4">
			<Icon icon="carbon:reset" color="#232338" width="30" height="30" />
		</button>
		<button on:click={deleteCounter} class="ml-4">
			<Icon icon="material-symbols:delete-rounded" color="#232338" width="30" height="30" />
		</button>
	</div>
</div>
