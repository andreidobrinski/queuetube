<script lang="ts">
	import Snackbar, { Label as SnackbarLabel } from '@smui/snackbar';
	import type { SnackbarComponentDev } from '@smui/snackbar';
	import IconButton from '@smui/icon-button';
	import Textfield from '@smui/textfield';
	import type { MenuComponentDev } from '@smui/menu';
	import Menu from '@smui/menu';
	import List, { Item, Separator, Text } from '@smui/list';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Button, { Label as ButtonLabel } from '@smui/button';
	import { queueStore, deleteQueue, renameQueue } from '$lib/queueStore';
	import { selectedQueue } from '$lib/selectedQueue';

	function focusNode(node: HTMLElement) {
		node.focus();
	}

	function copyToClipboard() {
		const stringified = JSON.stringify($queueStore);
		navigator.clipboard
			.writeText(stringified)
			.then(() => (exportSuccess = true))
			.catch(() => (exportSuccess = false));
		snackbarWithoutClose.open();
	}

	function handleDeleteQueue() {
		const queueId = $selectedQueue;
		selectedQueue.set('');
		deleteQueue(queueId);
	}

	let newQueueName = '';
	function handleRenameQueue() {
		renameQueue({ queueId: $selectedQueue, newQueueName });
		selectedQueue.set(newQueueName);
	}

	let menu: MenuComponentDev;
	let snackbarWithoutClose: SnackbarComponentDev;

	let deleteDialogOpen = false;
	let renameDialogOpen = false;
	let exportDialogOpen = false;
	let exportSuccess: boolean | null = null;
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
			<Item on:SMUI:action={() => (exportDialogOpen = true)}>
				<Text>Export</Text>
			</Item>
			<Separator />
			<Item on:SMUI:action={() => (deleteDialogOpen = true)}>
				<Text>Delete</Text>
			</Item>
		</List>
	</Menu>
</div>

<Dialog
	bind:open={deleteDialogOpen}
	aria-labelledby="delete-title"
	aria-describedby="delete-content"
>
	<Title id="delete-title">Delete Queue</Title>
	<Content id="delete-content">Are you sure you want to delete {$selectedQueue}?</Content>
	<Actions>
		<Button on:click={() => (deleteDialogOpen = false)}>
			<ButtonLabel>Cancel</ButtonLabel>
		</Button>
		<Button on:click={handleDeleteQueue}>
			<ButtonLabel>Delete</ButtonLabel>
		</Button>
	</Actions>
</Dialog>

<Dialog
	bind:open={renameDialogOpen}
	aria-labelledby="rename-title"
	aria-describedby="rename-content"
>
	<Title id="rename-title">Rename Queue</Title>
	<Content id="rename-content">
		<Textfield variant="outlined" bind:value={newQueueName} use={[focusNode]} />
	</Content>
	<Actions>
		<Button on:click={() => (renameDialogOpen = false)}>
			<ButtonLabel>Cancel</ButtonLabel>
		</Button>
		<Button on:click={handleRenameQueue}>
			<ButtonLabel>Rename</ButtonLabel>
		</Button>
	</Actions>
</Dialog>

<Dialog
	bind:open={exportDialogOpen}
	aria-labelledby="export-title"
	aria-describedby="export-content"
>
	<Title id="export-title">Export Data</Title>
	<Content id="export-content">
		All your queue data is shown below. Feel free to copy it and use it however you like.
		<hr style="margin-top: 16px; margin-bottom: 16px;" />
		{JSON.stringify($queueStore)}
	</Content>
	<Actions>
		<Button on:click={() => (exportDialogOpen = false)}>
			<ButtonLabel>Close</ButtonLabel>
		</Button>
		<Button on:click={copyToClipboard}>
			<ButtonLabel>Copy</ButtonLabel>
		</Button>
	</Actions>
</Dialog>
<Snackbar bind:this={snackbarWithoutClose}>
	<SnackbarLabel>
		{#if exportSuccess === true}
			Copied to Clipboard
		{:else}
			Copy Failed
		{/if}
	</SnackbarLabel>
</Snackbar>
