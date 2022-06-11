import { get } from 'svelte/store';
import { authStore } from '$lib/auth/authStore';

interface ChannelResponse {
  items: Array<{
    contentDetails: {
      relatedPlaylists: {
        uploads: string;
      }
    }
  }>
}

interface PlaylistItem {
  id: string;
  contentDetails: {
    videoId: string;
    videoPublishedAt: string;
  }
}

interface PlaylistResponse {
  items: Array<PlaylistItem>;
}

export async function getLatestUploadFromChannel(channelId: string): Promise<PlaylistItem> {
  const { token } = get(authStore);

  const baseChannelUrl = 'https://www.googleapis.com/youtube/v3/channels';
  const channelParams = [
    '?part=contentDetails%2Cid%2Csnippet%2CtopicDetails',
    `&id=${channelId}`,
    `&access_token=${token}`,
  ].join('');
  const channelUrl = `${baseChannelUrl}${channelParams}`;
  const channelRes = await fetch(channelUrl);
  const channelData: ChannelResponse = await channelRes.json();

  const uploadPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
  const basePlaylistUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';
  const playlistParams = [
    '?part=contentDetails%2Cid%2Csnippet',
    '&maxResults=5',
    `&playlistId=${uploadPlaylistId}`,
    `&access_token=${token}`,
  ].join('');
  const playlistUrl = `${basePlaylistUrl}${playlistParams}`;
  const playlistRes = await fetch(playlistUrl);
  const playlistData: PlaylistResponse = await playlistRes.json();

  return playlistData.items[0];
}