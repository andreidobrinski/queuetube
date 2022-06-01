<script lang="ts">
	import { fade, crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import IconButton from '@smui/icon-button';
	import Button from '@smui/button';
	import type { SubscriptionResponse, SubscriptionItem } from '$lib/types';
	import { authStore } from '$lib/auth/authStore';
	import { queueStore } from '$lib/queueStore';
	import { selectedQueue } from '$lib/selectedQueue';
	import ChannelImage from '$lib/queue/ChannelImage.svelte';

	const [send, receive] = crossfade({});

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

	async function reqChannel(channelId: string) {
		const baseUrl = 'https://www.googleapis.com/youtube/v3/channels';
		const params = [
			'?part=contentDetails%2Cid%2Csnippet%2CtopicDetails',
			`&id=${channelId}`,
			`&access_token=${$authStore.token}`,
		].join('');
		const url = `${baseUrl}${params}`;
		const res = await fetch(url);
		const data = await res.json();

		const uploadPlaylistId = data.items[0].contentDetails.relatedPlaylists.uploads;
		const basePlaylistUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';
		const playlistParams = [
			'?part=contentDetails%2Cid%2Csnippet',
			'&maxResults=50',
			`&playlistId=${uploadPlaylistId}`,
			`&access_token=${$authStore.token}`,
		].join('');
		const playlistUrl = `${basePlaylistUrl}${playlistParams}`;
		const playlistRes = await fetch(playlistUrl);
		const playlistData = await playlistRes.json();

		return playlistData.items[0];
	}

	async function addChannel(channel: SubscriptionItem) {
		const channelId = channel.snippet.resourceId.channelId;
		const name = channel.snippet.title;
		const lastestUpload = await reqChannel(channelId);
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
							latestViewed: {
								videoId: lastestUpload.contentDetails.videoId,
								videoPublishedAt: lastestUpload.contentDetails.videoPublishedAt,
								playlistItemId: lastestUpload.id,
							},
						},
					},
				},
			};
		});
		subscriptions = subscriptions.filter((subscription) => subscription.id !== channel.id);
	}

	function deleteChannel(channelId: string) {
		queueStore.update((queues) => {
			const currentQueue = queues[$selectedQueue];
			const { [channelId]: deletedChannel, ...remainderChannels } = currentQueue.channels;
			return {
				...queues,
				[$selectedQueue]: {
					...currentQueue,
					channels: remainderChannels,
				},
			};
		});
	}

	function deleteQueue() {
		const queueId = $selectedQueue;
		selectedQueue.set('');
		queueStore.update((queues) => {
			const { [queueId]: queue, ...rest } = queues;
			return rest;
		});
	}

	$: channelNumber = Object.keys($queueStore[$selectedQueue].channels).length;
</script>

{#if channelNumber === 0}
	<p>No Channels in Queue</p>
{:else if channelNumber === 1}
	<p>1 Channel in Queue</p>
{:else}
	<p>{channelNumber} Channels in Queue</p>
{/if}
{#each Object.values($queueStore[$selectedQueue].channels) as channel (channel.id)}
	<div
		style="display: flex; align-items: center;"
		animate:flip
		in:receive={{ key: channel.id }}
		out:fade
	>
		<ChannelImage
			src={channel.thumbnails?.default.url || channel.thumbnails?.medium.url || ''}
			name={channel.name}
		/>
		<p>{channel.name}</p>
		<IconButton
			aria-label={`delete channel ${channel.name} from queue ${$selectedQueue}`}
			class="material-icons"
			on:click={() => deleteChannel(channel.id)}
		>
			delete
		</IconButton>
	</div>
{/each}
{#if !subscriptions.length}
	<Button on:click={getSubscribedChannels}>Add Channel</Button>
{:else}
	<Button on:click={() => (subscriptions = [])}>Done Adding</Button>
	<p>My Subscriptions</p>
{/if}
{#each subscriptions as subscription (subscription.id)}
	<div
		style="display: flex; align-items: center;"
		animate:flip
		in:receive={{ key: subscription.snippet.resourceId.channelId }}
		out:send={{ key: subscription.snippet.resourceId.channelId }}
	>
		<IconButton
			on:click={() => addChannel(subscription)}
			aria-label={`add channel ${subscription.snippet.title} to queue ${$selectedQueue}`}
			class="material-icons"
		>
			add
		</IconButton>
		<ChannelImage
			src={subscription.snippet.thumbnails.default.url ||
				subscription.snippet.thumbnails.medium.url}
			name={subscription.snippet.title}
		/>
		<p>{subscription.snippet.title}{subscription.contentDetails.newItemCount ? ' - *' : ''}</p>
	</div>
{/each}

<Button on:click={deleteQueue}>Delete Queue</Button>
