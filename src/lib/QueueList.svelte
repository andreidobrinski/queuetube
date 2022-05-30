<script lang="ts">
	import Button from '@smui/button';
	import { queueStore } from '$lib/queue/queueStore';
	import AddQueue from './queue/AddQueue.svelte';
	import { selectedQueue } from './queue/selectedQueue';
</script>

<p>My Queue List</p>
<div style="display: flex; flex-direction: column; max-width: 400px; margin-bottom: 12px;">
	{#each Object.values($queueStore) as queue}
		<Button color="secondary" on:click={() => selectedQueue.set(`${queue.name}`)}>
			{queue.name}
		</Button>
	{/each}
</div>
<AddQueue />
