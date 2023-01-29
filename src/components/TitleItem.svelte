<script>
	import { fly } from 'svelte/transition';
</script>

<li in:fly={{ x: -20 }} class="text-xs bg-black rounded-md text-white py-1 px-3">
	<slot />
</li>
