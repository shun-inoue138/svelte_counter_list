<script lang="ts">
	import { counters } from '../store.js';
	import Counter from '../components/Counter.svelte';
	import { fade } from 'svelte/transition';
	const addCounter = () => {
		$counters = [...$counters, { title: 'new title', count: 0 }];
	};
	$: totalNum = $counters.reduce((acc, cur) => acc + cur.count, 0);
</script>

<main class="min-h-screen bg-gray-100">
	<div class="w-[96%] mx-auto text-center">
		<h1 class="text-4xl font-bold text-gray-900">Multiple Counter</h1>

		<div class="text-3xl">
			total:
			{#key totalNum}
				<span class="border-b border-black" in:fade>{totalNum}</span>
			{/key}
		</div>

		<ul class="flex flex-wrap gap-1 ">
			<!-- todo:TitleListコンポーネント化 -->
			{#each $counters as counter}
				<li class="text-xs">
					{counter.title}
				</li>
			{/each}
		</ul>
		<button on:click={addCounter}>new counter</button>
		<ul>
			{#if $counters === null}
				<li>no counter</li>
			{:else}
				{#each $counters as counter, index}
					<li>
						<Counter {index} />
					</li>
				{/each}
			{/if}
		</ul>
	</div>
</main>
