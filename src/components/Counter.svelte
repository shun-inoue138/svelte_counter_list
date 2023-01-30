<script lang="ts">
	import { fly } from 'svelte/transition';
	import { counters } from '../store';
	export let index: number;
	export let clickedIndex: number;
	let inputEL: null | HTMLElement = null;
	//ボタンがクリックされclickedIndexが変更される度に下記処理を実行
	$: if (index === clickedIndex) {
		inputEL?.focus();
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
		<button on:click={increment}> <span class="text-blue-600 text-[2em]">+1</span> </button>
		<button on:click={decrement}> <span class="text-red-600 text-[2em] ml-4">-1</span> </button>
		<button on:click={reset} class="ml-4">
			<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"
				><path
					fill="currentColor"
					d="M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6l6-6l-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10Z"
				/></svg
			>
		</button>
		<button on:click={deleteCounter} class="ml-4">
			<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16"
				><path
					fill="currentColor"
					d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
				/></svg
			>
		</button>
	</div>
</div>
