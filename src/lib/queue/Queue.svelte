<script lang="ts">
	import { fade } from 'svelte/transition';
	import { selectedQueue } from '$lib/selectedQueue';
	import Tab, { Label, Icon } from '@smui/tab';
	import IconButton from '@smui/icon-button';
	import TabBar from '@smui/tab-bar';
	import QueueVideos from '$lib/queue/QueueVideos.svelte';
	import QueueSettings from '$lib/queue/QueueSettings.svelte';

	let tabs = [
		{
			label: 'Queue',
			icon: 'playlist_play',
		},
		{
			label: 'Settings',
			icon: 'settings',
		},
	];

	let active = tabs[0];
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

<TabBar {tabs} let:tab bind:active style="margin-bottom: 1.67em;">
	<Tab {tab}>
		<Icon class="material-icons">{tab.icon}</Icon>
		<Label>{tab.label}</Label>
	</Tab>
</TabBar>

{#if active === tabs[0]}
	<div in:fade>
		<QueueVideos />
	</div>
{/if}
{#if active === tabs[1]}
	<div in:fade>
		<QueueSettings />
	</div>
{/if}
