import { get } from 'svelte/store';
import { authStore } from '$lib/auth/authStore';

interface Channel {
  id: string;
  contentDetails: {
    relatedPlaylists: {
      uploads: string;
    }
  }
}

interface GetChannelsResponse {
  items: Array<Channel>
}

export async function getChannelsByIds(channelIds: string): Promise<GetChannelsResponse> {
  const { token } = get(authStore);

  const baseUrl = 'https://www.googleapis.com/youtube/v3/channels';
  const params = [
    '?part=contentDetails%2Cid%2Csnippet%2CtopicDetails',
    `&id=${channelIds}`,
    `&access_token=${token}`,
  ].join('');
  const url = `${baseUrl}${params}`;

  const res = await fetch(url);
  const data: GetChannelsResponse = await res.json();

  return data;
}