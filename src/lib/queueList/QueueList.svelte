<script lang="ts">
	import List, { Item, Text } from '@smui/list';
	import { queueStore } from '$lib/queueStore';
	import AddQueue from '$lib/queueList/AddQueue.svelte';
	import { selectedQueue } from '$lib/selectedQueue';

	$: sortedQueues = Object.values($queueStore).sort((a, b) => a.name.localeCompare(b.name));
</script>

<h2 class="mdc-typography--headline5">My Queue List</h2>
<List>
	{#each sortedQueues as queue}
		<Item on:SMUI:action={() => selectedQueue.set(`${queue.name}`)}>
			<Text>{queue.name}</Text>
		</Item>
	{/each}
</List>

<AddQueue />
