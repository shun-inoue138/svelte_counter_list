<script>
	import { counters } from '../store';
	import TitleItem from './TitleItem.svelte';
</script>

<ul class="flex flex-wrap gap-1 ">
	{#each $counters as counter, index}
		<TitleItem {index} on:focus>
			{counter.title}
		</TitleItem>
	{/each}
</ul>
