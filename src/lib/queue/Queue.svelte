<script lang="ts">
	import { selectedQueue } from '$lib/selectedQueue';
	import Tab, { Label } from '@smui/tab';
	import IconButton from '@smui/icon-button';
	import TabBar from '@smui/tab-bar';
	import QueueVideos from '$lib/queue/QueueVideos.svelte';
	import QueueSettings from '$lib/queue/QueueSettings.svelte';

	enum Tabs {
		Queue = 'Queue',
		Settings = 'Settings',
	}
	let active = Tabs.Queue;
</script>

<div style="display: flex; align-items: center;">
	<IconButton
		on:click={() => selectedQueue.set('')}
		class="material-icons"
		aria-label="Back to QueueList"
	>
		arrow_back
	</IconButton>
	<h5>{$selectedQueue}</h5>
</div>

<TabBar tabs={[Tabs.Queue, Tabs.Settings]} let:tab bind:active style="margin-bottom: 1.67em;">
	<Tab {tab}>
		<Label>{tab}</Label>
	</Tab>
</TabBar>

{#if active === Tabs.Queue}
	<QueueVideos />
{/if}
{#if active === Tabs.Settings}
	<QueueSettings />
{/if}
