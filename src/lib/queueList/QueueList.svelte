<script lang="ts">
	import Button from '@smui/button';
	import { queueStore } from '$lib/queueStore';
	import AddQueue from '$lib/queueList/AddQueue.svelte';
	import { selectedQueue } from '$lib/selectedQueue';
</script>

<h2 class="mdc-typography--headline5">My Queue List</h2>
<div style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 12px;">
	{#each Object.values($queueStore) as queue}
		<Button color="secondary" on:click={() => selectedQueue.set(`${queue.name}`)}>
			{queue.name}
		</Button>
	{/each}
</div>
<AddQueue />
