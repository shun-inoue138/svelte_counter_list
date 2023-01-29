<script>
	import { counters } from '../store.js';
	import TitleItem from './TitleItem.svelte';
</script>

<ul class="flex flex-wrap gap-1 ">
	{#each $counters as counter}
		<TitleItem>
			{counter.title}
		</TitleItem>
	{/each}
</ul>
