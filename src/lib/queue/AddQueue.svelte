<script lang="ts">
	import { queueStore } from '$lib/queue/queueStore';

	let isAddingQueue = false;
	let newQueueName = '';
</script>

<div style="display: flex; flex-direction: column; max-width: 400px;">
	{#if isAddingQueue}
		<input bind:value={newQueueName} />
		<div style="display: flex; justify-content: space-between; margin-top: 10px;">
			<button type="button" on:click={() => (isAddingQueue = false)} style="width: 40%;">
				Cancel
			</button>
			<button
				type="button"
				on:click={() => {
					queueStore.update((value) => {
						return { ...value, [newQueueName]: { name: newQueueName, channels: [] } };
					});
					isAddingQueue = false;
					newQueueName = '';
				}}
				style="width: 40%;"
			>
				Add
			</button>
		</div>
	{:else}
		<button type="button" on:click={() => (isAddingQueue = true)}>Add a Queue</button>
	{/if}
</div>
