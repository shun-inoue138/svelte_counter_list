<script lang="ts">
	import { counters } from '../store';
	import Counter from '../components/Counter.svelte';
	import { fade } from 'svelte/transition';
	import TitleList from '../components/TitleList.svelte';
	const addCounter = () => {
		$counters = [...$counters, { title: 'new title', count: 0 }];
	};
	$: totalNum = $counters.reduce((acc, cur) => acc + cur.count, 0);
	//TitleItem.svelteで発火したfocusイベントから、クリックされたindexを取得するための変数
	let clickedIndex: number;
</script>

<main class="min-h-screen bg-gray-100">
	<div class="w-[96%] mx-auto text-center py-12">
		<h1 class="text-6xl font-bold text-gray-900">Multiple Counters</h1>

		<div class="sticky top-5">
			<div class="text-3xl mb-8">
				Total:
				{#key totalNum}
					<span in:fade>{totalNum > 99999 ? '99999+' : totalNum}</span>
				{/key}
			</div>
			<button on:click={addCounter} class="bg-blue-500 text-white px-8 py-2 rounded-3xl mb-8 "
				>add counter</button
			>
			<div class="mb-8 truncate">
				<TitleList
					on:focusIndex={(e) => {
						clickedIndex = e.detail.index;
					}}
				/>
			</div>
		</div>

		<ul class="flex flex-col gap-6">
			{#each $counters as _, index}
				<li>
					<Counter {index} {clickedIndex} />
				</li>
			{/each}
		</ul>
	</div>
</main>
