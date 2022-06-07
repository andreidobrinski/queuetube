<script lang="ts">
	import IconButton from '@smui/icon-button';
	import Textfield from '@smui/textfield';
	import type { MenuComponentDev } from '@smui/menu';
	import Menu from '@smui/menu';
	import List, { Item, Separator, Text } from '@smui/list';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Button, { Label } from '@smui/button';
	import { queueStore } from '$lib/queueStore';
	import { selectedQueue } from '$lib/selectedQueue';

	function focusNode(node: HTMLElement) {
		node.focus();
	}

	function deleteQueue() {
		const queueId = $selectedQueue;
		selectedQueue.set('');
		queueStore.update((queues) => {
			const { [queueId]: queue, ...rest } = queues;
			return rest;
		});
	}

	let newQueueName = '';
	function renameQueue() {
		queueStore.update((queues) => {
			const queueValues = queues[$selectedQueue];
			const withRenamedQueue = {
				...queues,
				[newQueueName]: { ...queueValues, name: newQueueName },
			};
			const { [$selectedQueue]: queue, ...rest } = withRenamedQueue;
			return rest;
		});
		selectedQueue.set(newQueueName);
		renameDialogOpen = false;
	}

	let menu: MenuComponentDev;

	let deleteDialogOpen = false;
	let renameDialogOpen = false;
</script>

<div>
	<IconButton
		aria-label="rename or delete queue"
		class="material-icons"
		on:click={() => menu.setOpen(true)}
	>
		more_vert
	</IconButton>
	<Menu bind:this={menu}>
		<List>
			<Item on:SMUI:action={() => (renameDialogOpen = true)}>
				<Text>Rename</Text>
			</Item>
			<Separator />
			<Item on:SMUI:action={() => (deleteDialogOpen = true)}>
				<Text>Delete</Text>
			</Item>
		</List>
	</Menu>
</div>

<Dialog open={deleteDialogOpen} aria-labelledby="delete-title" aria-describedby="delete-content">
	<Title id="delete-title">Delete Queue</Title>
	<Content id="delete-content">Are you sure you want to delete {$selectedQueue}?</Content>
	<Actions>
		<Button on:click={() => (deleteDialogOpen = false)}>
			<Label>Cancel</Label>
		</Button>
		<Button on:click={deleteQueue}>
			<Label>Delete</Label>
		</Button>
	</Actions>
</Dialog>

<Dialog open={renameDialogOpen} aria-labelledby="rename-title" aria-describedby="rename-content">
	<Title id="rename-title">Rename Queue</Title>
	<Content id="rename-content">
		<Textfield variant="outlined" bind:value={newQueueName} use={[focusNode]} />
	</Content>
	<Actions>
		<Button on:click={() => (renameDialogOpen = false)}>
			<Label>Cancel</Label>
		</Button>
		<Button on:click={renameQueue}>
			<Label>Rename</Label>
		</Button>
	</Actions>
</Dialog>
