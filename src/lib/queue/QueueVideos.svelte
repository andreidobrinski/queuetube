<script lang="ts">
	import { selectedQueue } from '$lib/selectedQueue';
	import { authStore } from '$lib/auth/authStore';
	import { queueStore } from '$lib/queueStore';

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
</script>

{#each Object.values($queueStore[$selectedQueue].channels) as channel}
	<div style="display: flex;">
		<p>{channel.name}</p>
		<button type="button" on:click={() => reqChannel(channel.id)}>Req</button>
	</div>
{/each}
