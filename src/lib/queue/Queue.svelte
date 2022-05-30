<script lang="ts">
	import { selectedQueue } from '$lib/selectedQueue';
	import Tab, { Label } from '@smui/tab';
	import IconButton from '@smui/icon-button';
	import TabBar from '@smui/tab-bar';
	import QueueVideos from '$lib/queue/QueueVideos.svelte';
	import QueueSettings from '$lib/queue/QueueSettings.svelte';

	let active = 'Queue';
</script>

<div style="display: flex; align-items: center;">
	<IconButton on:click={() => selectedQueue.set('')} class="material-icons">arrow_back</IconButton>
	<h5>{$selectedQueue}</h5>
</div>

<TabBar tabs={['Queue', 'Settings']} let:tab bind:active style="margin-bottom: 1.67em;">
	<Tab {tab}>
		<Label>{tab}</Label>
	</Tab>
</TabBar>

{#if active === 'Queue'}
	<QueueVideos />
{/if}
{#if active === 'Settings'}
	<QueueSettings />
{/if}
