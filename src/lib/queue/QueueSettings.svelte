<script lang="ts">
	import type { SubscriptionResponse, SubscriptionItem } from '$lib/types';
	import { authStore } from '$lib/auth/authStore';
	import { queueStore } from '$lib/queueStore';
	import { selectedQueue } from '$lib/selectedQueue';

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
						},
					},
				},
			};
		});
		subscriptions = subscriptions.filter((subscription) => subscription.id !== channel.id);
	}
</script>

<button type="button" on:click={getSubscribedChannels}>Add Channel</button>
{#each subscriptions as subscription}
	<div style="display: flex;">
		<button type="button" on:click={() => addChannel(subscription)}>Add</button>
		<p>{subscription.snippet.title}{subscription.contentDetails.newItemCount ? ' - *' : ''}</p>
	</div>
{/each}
