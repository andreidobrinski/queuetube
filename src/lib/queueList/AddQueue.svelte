<script lang="ts">
	import { fade } from 'svelte/transition';
	import { queueStore } from '$lib/queueStore';
	import Textfield from '@smui/textfield';
	import Button from '@smui/button';

	let isAddingQueue = false;
	let newQueueName = '';

	function focusNode(node: HTMLElement) {
		node.focus();
	}
</script>

<div style="display: flex; flex-direction: column; align-items: flex-start;">
	{#if isAddingQueue}
		<div in:fade>
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
		</div>
	{:else}
		<div in:fade>
			<Button on:click={() => (isAddingQueue = true)}>Add a Queue</Button>
		</div>
	{/if}
</div>
