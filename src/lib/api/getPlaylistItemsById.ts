import { get } from 'svelte/store';
import { authStore } from '$lib/auth/authStore';

interface PlaylistItem {
  id: string;
  contentDetails: {
    videoId: string;
  }
}

interface GetPlaylistItemsResponse {
  items: Array<PlaylistItem>
}

export async function getPlaylistItemsById(playlistId: string): Promise<GetPlaylistItemsResponse> {
  const { token } = get(authStore);

  const baseUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';
  const params = [
    '?part=contentDetails%2Cid%2Csnippet',
    '&maxResults=50',
    `&playlistId=${playlistId}`,
    `&access_token=${token}`,
  ].join('');
  const url = `${baseUrl}${params}`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
}