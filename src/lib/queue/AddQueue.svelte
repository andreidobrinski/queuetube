<script lang="ts">
	import { queueStore } from '$lib/queue/queueStore';
	import Textfield from '@smui/textfield';
	import Button from '@smui/button';

	let isAddingQueue = false;
	let newQueueName = '';

	function focusNode(node: HTMLElement) {
		node.focus();
	}
</script>

<div style="display: flex; flex-direction: column; max-width: 400px;">
	{#if isAddingQueue}
		<Textfield variant="outlined" bind:value={newQueueName} use={[focusNode]} />
		<div style="display: flex; justify-content: space-between; margin-top: 10px;">
			<Button
				on:click={() => {
					isAddingQueue = false;
					newQueueName = '';
				}}
				style="width: 40%;"
			>
				Cancel
			</Button>
			<Button
				on:click={() => {
					queueStore.update((value) => {
						return { ...value, [newQueueName]: { name: newQueueName, channels: {} } };
					});
					isAddingQueue = false;
					newQueueName = '';
				}}
				style="width: 40%;"
			>
				Add
			</Button>
		</div>
	{:else}
		<Button on:click={() => (isAddingQueue = true)}>Add a Queue</Button>
	{/if}
</div>
