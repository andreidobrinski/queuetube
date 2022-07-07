<script lang="ts">
	import { onMount } from 'svelte';
	import IconButton from '@smui/icon-button';
	import Button, { Icon, Label } from '@smui/button';
	import CircularProgress from '@smui/circular-progress';
	import dayjs from 'dayjs';
	import duration from 'dayjs/plugin/duration';
	import { selectedQueue } from '$lib/selectedQueue';
	import { queueStore, addNewVideosToQueue, removeVideoFromQueue } from '$lib/queueStore';
	import { getChannelsByIds, getVideosByIds, getPlaylistItemsById, getQueueUrl } from '$lib/api';

	dayjs.extend(duration);

	$: channels = $queueStore[$selectedQueue]?.channels || {};
	$: channelIds = Object.keys(channels).join(',');
	let isFetchingVideos = true;

	async function getNewVideos() {
		if (!channelIds) return;

		isFetchingVideos = true;

		const channelData = await getChannelsByIds(channelIds);

		const channels = channelData.items.map((channel) => ({
			channelId: channel.id,
			playlistId: channel.contentDetails.relatedPlaylists.uploads,
		}));

		const newVideoIds = await Promise.all(channels.map((channel) => getChannelUploads(channel)));

		const filteredVideoIds = filterExistingVideoIds(newVideoIds.flat());

		const videoData = await getVideosByIds(filteredVideoIds);

		const newVideos = videoData.items.map((video) => ({
			id: video.id,
			title: video.snippet.title,
			thumbnails: video.snippet.thumbnails,
			channelId: video.snippet.channelId,
			channelTitle: video.snippet.channelTitle,
			publishedAt: video.snippet.publishedAt,
			duration: video.contentDetails.duration,
		}));

		addNewVideosToQueue({ newVideos, queueId: $selectedQueue });

		isFetchingVideos = false;
	}

	function filterExistingVideoIds(newVideoIds: Array<string>) {
		const videoIdsInQueue = $queueStore[$selectedQueue].videos?.map((video) => video.id);

		const filteredNewVideoIds = newVideoIds.filter((newId) => !videoIdsInQueue?.includes(newId));

		return filteredNewVideoIds;
	}

	async function getChannelUploads(channel: { channelId: string; playlistId: string }) {
		const { playlistId, channelId } = channel;
		const playlistData = await getPlaylistItemsById(playlistId);

		const mostRecentWatchedId =
			$queueStore[$selectedQueue].channels[channelId].latestViewed?.videoId;

		let videos: Array<string> = [];

		playlistData.items.some((playlistItem) => {
			if (playlistItem.contentDetails.videoId === mostRecentWatchedId) return true;

			videos.push(playlistItem.contentDetails.videoId);
		});

		return videos;
	}

	let queueUrl = '';
	$: $queueStore, setQueueUrl();
	function setQueueUrl() {
		queueUrl = getQueueUrl();
	}

	onMount(async () => {
		await getNewVideos();
	});

	function formatDuration(duration: string) {
		const durationObject = dayjs.duration(duration);

		const hours = durationObject.hours();

		if (hours > 0) return durationObject.format('H:mm:ss');

		return durationObject.format('m:ss');
	}
</script>

<Button href={queueUrl} style="margin-bottom: 1.67em; width: 100%;">
	<Icon class="material-icons">play_arrow</Icon>
	<Label>Play All ({$queueStore[$selectedQueue].videos.length})</Label>
</Button>
{#if isFetchingVideos}
	<div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
		<CircularProgress style="height: 32px; width: 32px;" indeterminate />
	</div>
{/if}
{#each $queueStore[$selectedQueue].videos as video}
	<div style="display: flex; align-items: center; margin-bottom: 16px;">
		<button
			on:click={() => (window.location.href = getQueueUrl(video.id))}
			aria-label={`open playlist starting at video titled ${video.title}`}
			class="thumbnail-link"
			type="button"
		>
			<img
				src={video.thumbnails.medium.url}
				alt={`image for video ${video.title}`}
				class="video-image"
				referrerpolicy="no-referrer"
			/>
			<small class="duration">{formatDuration(video.duration)}</small>
		</button>
		<div style="display: flex; flex-direction: column;">
			<p style="margin-bottom: 0px;">{video.title}</p>
			<p style="margin-top: 0px; color: dimgray;">{video.channelTitle}</p>
		</div>
		<IconButton
			aria-label={`remove video titled ${video.title} from queue ${$selectedQueue}`}
			class="material-icons"
			style="margin-left: auto; color: green;"
			on:click={() => removeVideoFromQueue({ video, queueId: $selectedQueue })}
		>
			check
		</IconButton>
	</div>
{/each}

<style>
	.thumbnail-link {
		cursor: pointer;
		text-decoration: none;
		display: grid;
		grid-template-columns: 1fr;
		border: none;
		padding: 0;
		border-radius: 4px;
		margin-right: 8px;
	}

	.video-image {
		border-radius: 4px;
		aspect-ratio: 16 / 9;
		height: 60px;
		grid-area: 1 / 1;
	}

	.duration {
		grid-area: 1 / 1;
		justify-self: end;
		align-self: end;
		font-size: 0.8rem;
		font-weight: bold;
		line-height: 0.9;
		padding: 3px 2px;
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		border-radius: 4px;
	}
</style>
