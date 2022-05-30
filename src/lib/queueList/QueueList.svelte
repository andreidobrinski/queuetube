<script lang="ts">
	import Button from '@smui/button';
	import { queueStore } from '$lib/queueStore';
	import AddQueue from '$lib/queueList/AddQueue.svelte';
	import { selectedQueue } from '$lib/selectedQueue';
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
