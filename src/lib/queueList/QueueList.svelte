<script lang="ts">
	import List, { Item, Text } from '@smui/list';
	import { queueStore } from '$lib/queueStore';
	import AddQueue from '$lib/queueList/AddQueue.svelte';
	import { selectedQueue } from '$lib/selectedQueue';
	import { viewTransition } from '$lib/utils';

	$: sortedQueues = Object.values($queueStore).sort((a, b) => a.name.localeCompare(b.name));
</script>

<h2 class="mdc-typography--headline5">My Queue List</h2>
<List>
	{#each sortedQueues as queue (queue.name)}
		<Item on:SMUI:action={() => viewTransition(() => selectedQueue.set(`${queue.name}`))}>
			<div class="view-transition-wrap" style="--viewTransitionName: queue-{queue.name};">
				<Text>{queue.name}</Text>
			</div>
		</Item>
	{/each}
</List>

<AddQueue />

<style>
	.view-transition-wrap {
		view-transition-name: var(--viewTransitionName);
	}
</style>
