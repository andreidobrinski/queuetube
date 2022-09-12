<script lang="ts">
	import { flip } from 'svelte/animate';
	import Button from '@smui/button';
	import ChannelImage from '$lib/queue/ChannelImage.svelte';
	import type { SubscriptionItem } from '$lib/api/types';
	import { authStore } from '$lib/auth/authStore';
	import { getAuthUrl } from '$lib/api';
	import { queueStore, addChannelToQueue } from '$lib/queueStore';
	import { selectedQueue } from '$lib/selectedQueue';
	import { getSubscribedChannels, getSecondLatestUploadFromChannel } from '$lib/api';
	import SvgIcon from '$lib/icons/SvgIcon.svelte';
	import ButtonIcon from '$lib/icons/ButtonIcon.svelte';

	export let crossfadeTransition;
	const [send, receive] = crossfadeTransition;

	let subscriptions: Array<SubscriptionItem> = [];
	let nextPageToken: string | null = null;

	async function getSubscriptions() {
		const data = await getSubscribedChannels({ pageToken: nextPageToken });
		const filteredByExisting = data.items.filter(
			(subscription) =>
				!Object.keys($queueStore[$selectedQueue].channels).includes(
					subscription.snippet.resourceId.channelId
				)
		);
		nextPageToken = data.nextPageToken;
		subscriptions = [...subscriptions, ...filteredByExisting];
	}

	async function addChannel(channel: SubscriptionItem) {
		const channelId = channel.snippet.resourceId.channelId;
		const secondLastestUpload = await getSecondLatestUploadFromChannel(channelId);
		const newChannel = {
			id: channelId,
			name: channel.snippet.title,
			thumbnails: channel.snippet.thumbnails,
			latestViewed: {
				videoId: secondLastestUpload.contentDetails.videoId,
				videoPublishedAt: secondLastestUpload.contentDetails.videoPublishedAt,
				playlistItemId: secondLastestUpload.id,
			},
		};
		addChannelToQueue({ queueId: $selectedQueue, newChannel });
		subscriptions = subscriptions.filter((subscription) => subscription.id !== channel.id);
	}

	function handleDoneAdding() {
		subscriptions = [];
		nextPageToken = null;
	}

	$: isLoggedIn = $authStore.isLoggedIn;
	const authUrl = getAuthUrl();
</script>

{#if !isLoggedIn}
	<Button href={authUrl}>Log In to Add Channels</Button>
{/if}
{#if !subscriptions.length}
	<Button on:click={getSubscriptions} disabled={!isLoggedIn}>
		<SvgIcon icon="Add" />
		Add Channel
	</Button>
{:else}
	<Button on:click={handleDoneAdding}>Done Adding</Button>
	<p>My Subscriptions</p>
{/if}
{#each subscriptions as subscription (subscription.id)}
	<div
		style="display: flex; align-items: center;"
		animate:flip
		in:receive={{ key: subscription.snippet.resourceId.channelId }}
		out:send={{ key: subscription.snippet.resourceId.channelId }}
	>
		<ButtonIcon
			onClick={() => addChannel(subscription)}
			icon="Add"
			ariaText={`add channel ${subscription.snippet.title} to queue ${$selectedQueue}`}
		/>
		<ChannelImage
			src={subscription.snippet.thumbnails.default.url ||
				subscription.snippet.thumbnails.medium.url}
			name={subscription.snippet.title}
		/>
		<p>{subscription.snippet.title}</p>
	</div>
{/each}
{#if !!nextPageToken && !!subscriptions.length}
	<Button on:click={getSubscriptions}>Load More</Button>
{/if}
