<script lang="ts">
	import { fade } from 'svelte/transition';
	import { queueStore } from '$lib/queueStore';
	import { selectedQueue } from '$lib/selectedQueue';
	import Tab, { Label } from '@smui/tab';
	import ButtonIcon from '$lib/icons/ButtonIcon.svelte';
	import SvgIcon from '$lib/icons/SvgIcon.svelte';
	import TabBar from '@smui/tab-bar';
	import QueueVideos from '$lib/queue/QueueVideos.svelte';
	import QueueSettings from '$lib/queue/settings/QueueSettings.svelte';
	import { viewTransition } from '$lib/utils';

	let tabs = [
		{
			label: 'Queue',
			icon: 'PlaylistPlay',
		},
		{
			label: 'Settings',
			icon: 'Settings',
		},
	];

	const hasChannelsInQueue = Object.keys($queueStore[$selectedQueue].channels).length;

	let active = hasChannelsInQueue ? tabs[0] : tabs[1];
	const queueName = $selectedQueue;
</script>

<header>
	<ButtonIcon
		onClick={() => viewTransition(() => selectedQueue.set(''))}
		icon="ArrowBack"
		ariaText="Back to QueueList"
	/>
	<h5 style="--viewTransitionName: queue-{queueName};">{queueName}</h5>
</header>

<TabBar {tabs} let:tab bind:active style="margin-bottom: 1.67em;">
	<Tab {tab}>
		<SvgIcon icon={tab.icon} />
		<Label>{tab.label}</Label>
	</Tab>
</TabBar>

{#if active === tabs[0]}
	<section in:fade>
		<QueueVideos />
	</section>
{/if}
{#if active === tabs[1]}
	<section in:fade>
		<QueueSettings />
	</section>
{/if}

<style>
	header {
		display: flex;
		align-items: center;
		position: sticky;
		top: 0;
		z-index: 1;
		background-color: var(--bgColor);
	}

	h5 {
		margin: 0.8em;
		view-transition-name: var(--viewTransitionName);
	}
</style>
