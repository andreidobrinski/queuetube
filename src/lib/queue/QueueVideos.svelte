<script lang="ts">
	import { selectedQueue } from '$lib/selectedQueue';
	import { authStore } from '$lib/auth/authStore';
	import { queueStore } from '$lib/queueStore';
	import { getChannelsByIds, getVideosByIds, getPlaylistItemsById } from '$lib/api';

	const channels = $queueStore[$selectedQueue].channels || {};
	const channelIds = Object.keys(channels).join(',');
	const queueVideos = $queueStore[$selectedQueue].videos || [];

	async function getNewVideos() {
		const channelData = await getChannelsByIds(channelIds);

		const channels = channelData.items.map((channel) => ({
			channelId: channel.id,
			playlistId: channel.contentDetails.relatedPlaylists.uploads,
		}));

		const newVideoIds = await Promise.all(channels.map((channel) => getChannelUploads(channel)));

		const filteredVideoIds = filterExistingVideoIds(newVideoIds.flat());

		const videoData = await getVideosByIds(filteredVideoIds.join(','));

		const newVideos = videoData.items.map((video) => ({
			id: video.id,
			title: video.snippet.title,
			thumbnails: video.snippet.thumbnails,
			channelId: video.snippet.channelId,
			channelTitle: video.snippet.channelTitle,
			publishedAt: video.snippet.publishedAt,
		}));

		queueStore.update((queues) => {
			const currentQueue = queues[$selectedQueue];
			return {
				...queues,
				[$selectedQueue]: {
					...currentQueue,
					videos: [...currentQueue.videos, ...newVideos],
				},
			};
		});
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
			$queueStore[$selectedQueue].channels[channelId].latestViewed?.playlistItemId;

		let videos: Array<string> = [];

		playlistData.items.some((playlistItem) => {
			if (playlistItem.id === mostRecentWatchedId) return true;

			videos.push(playlistItem.contentDetails.videoId);
		});

		return videos;
	}

	getNewVideos();
</script>

{#each queueVideos as video}
	<div style="display: flex; align-items: center; margin-bottom: 16px;">
		<img
			src={video.thumbnails.medium.url}
			alt={`image for video ${video.title}`}
			style="border-radius: 8px; margin-right: 8px; aspect-ratio: 16 / 9; height: 80px;"
			referrerpolicy="no-referrer"
		/>
		<div style="display: flex; flex-direction: column;">
			<p style="margin-bottom: 0px;">{video.title}</p>
			<p style="margin-top: 0px;">{video.channelTitle}</p>
		</div>
	</div>
{/each}
