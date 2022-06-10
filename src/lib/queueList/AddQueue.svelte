<script lang="ts">
	import { fade } from 'svelte/transition';
	import { queueStore } from '$lib/queueStore';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import Button, { Icon } from '@smui/button';

	let isAddingQueue = false;
	let newQueueName = '';

	function focusNode(node: HTMLElement) {
		node.focus();
	}

	$: isAddButtonDisabled = Object.keys($queueStore).includes(newQueueName);
</script>

<div style="display: flex; flex-direction: column; align-items: flex-start;">
	{#if isAddingQueue}
		<div in:fade>
			<Textfield variant="outlined" bind:value={newQueueName} use={[focusNode]}>
				<HelperText slot="helper" persistent invalid>
					{isAddButtonDisabled ? 'Queue name already exists' : ''}
				</HelperText>
			</Textfield>
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
					disabled={isAddButtonDisabled}
					on:click={() => {
						queueStore.update((value) => {
							return { ...value, [newQueueName]: { name: newQueueName, channels: {}, videos: [] } };
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
			<Button on:click={() => (isAddingQueue = true)}>
				<Icon class="material-icons">add</Icon>
				Add a Queue
			</Button>
		</div>
	{/if}
</div>
