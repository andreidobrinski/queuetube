<script lang="ts">
	import IconButton from '@smui/icon-button';
	import Button from '@smui/button';
	import type { SubscriptionResponse, SubscriptionItem } from '$lib/types';
	import { authStore } from '$lib/auth/authStore';
	import { queueStore } from '$lib/queueStore';
	import { selectedQueue } from '$lib/selectedQueue';
	import ChannelImage from '$lib/queue/ChannelImage.svelte';

	let subscriptions: Array<SubscriptionItem> = [];

	async function getSubscribedChannels() {
		const baseUrl = 'https://www.googleapis.com/youtube/v3/subscriptions';
		const params = [
			'?part=snippet%2CcontentDetails%2Cid',
			'&maxResults=50',
			'&mine=true',
			`&access_token=${$authStore.token}`,
		].join('');

		const url = `${baseUrl}${params}`;
		const res = await fetch(url);
		const data: SubscriptionResponse = await res.json();
		console.log('data', data);
		subscriptions = data.items.filter(
			(subscription) =>
				!Object.keys($queueStore[$selectedQueue].channels).includes(
					subscription.snippet.resourceId.channelId
				)
		);
	}

	function addChannel(channel: SubscriptionItem) {
		const channelId = channel.snippet.resourceId.channelId;
		const name = channel.snippet.title;
		queueStore.update((queues) => {
			const currentQueue = queues[$selectedQueue];
			return {
				...queues,
				[$selectedQueue]: {
					...currentQueue,
					channels: {
						...currentQueue.channels,
						[channelId]: {
							id: channelId,
							name,
							thumbnails: channel.snippet.thumbnails,
						},
					},
				},
			};
		});
		subscriptions = subscriptions.filter((subscription) => subscription.id !== channel.id);
	}
</script>

<p>Channels in Queue</p>
{#each Object.values($queueStore[$selectedQueue].channels) as channel}
	<div style="display: flex; align-items: center;">
		<ChannelImage src={channel.thumbnails?.default.url || ''} name={channel.name} />
		<p>{channel.name}</p>
	</div>
{/each}
{#if !subscriptions.length}
	<Button on:click={getSubscribedChannels}>Add Channel</Button>
{:else}
	<Button on:click={() => (subscriptions = [])}>Done Adding</Button>
	<p>My Subscriptions</p>
{/if}
{#each subscriptions as subscription}
	<div style="display: flex; align-items: center;">
		<IconButton
			on:click={() => addChannel(subscription)}
			aria-label={`Add channel ${subscription.snippet.title} to queue ${$selectedQueue}`}
			class="material-icons"
		>
			add
		</IconButton>
		<ChannelImage
			src={subscription.snippet.thumbnails.default.url}
			name={subscription.snippet.title}
		/>
		<p>{subscription.snippet.title}{subscription.contentDetails.newItemCount ? ' - *' : ''}</p>
	</div>
{/each}
