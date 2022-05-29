<script lang="ts">
	import type { SubscriptionResponse, SubscriptionItem } from '$lib/types';
	import { selectedQueue } from '$lib/queue/selectedQueue';
	import { authStore } from '$lib/auth/authStore';
	import { queueStore } from '$lib/queue/queueStore';

	let subscriptions: Array<SubscriptionItem> = [];

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
			'?part=contentDetails%2Cid%2Csnippet%2Cstatus',
			'&maxResults=50',
			`&playlistId=${uploadPlaylistId}`,
			`&access_token=${$authStore.token}`,
		].join('');
		const playlistUrl = `${basePlaylistUrl}${playlistParams}`;
		const playlistRes = await fetch(playlistUrl);
		const playlistData = await playlistRes.json();
		console.log('playlistData', playlistData);
	}

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
						},
					},
				},
			};
		});
		subscriptions = subscriptions.filter((subscription) => subscription.id !== channel.id);
	}
</script>

<p>{$selectedQueue}</p>
{#each Object.values($queueStore[$selectedQueue].channels) as channel}
	<div style="display: flex;">
		<p>{channel.name}</p>
		<button type="button" on:click={() => reqChannel(channel.id)}>Req</button>
	</div>
{/each}
<button type="button" on:click={getSubscribedChannels}>Add Channel</button>
<button type="button" on:click={() => selectedQueue.set('')}>Back</button>
{#each subscriptions as subscription}
	<div style="display: flex;">
		<button type="button" on:click={() => addChannel(subscription)}>Add</button>
		<p>{subscription.snippet.title}{subscription.contentDetails.newItemCount ? ' - *' : ''}</p>
	</div>
{/each}
