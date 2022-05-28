<script lang="ts">
	import { queueStore } from '$lib/queue/queueStore';
	import AddQueue from './queue/AddQueue.svelte';
	import { selectedQueue } from './queue/selectedQueue';
</script>

<div>
	<p>My Queue List</p>
	<div style="display: flex; flex-direction: column; max-width: 400px; margin-bottom: 12px;">
		{#each $queueStore as queue}
			<button type="button" on:click={() => selectedQueue.set(queue.name)}>{queue.name}</button>
		{/each}
	</div>
	<AddQueue />
</div>
