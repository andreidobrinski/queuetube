import { get } from 'svelte/store';
import { authStore } from '$lib/auth/authStore';

export interface ChannelThumbnails {
  default: {
    url: string;
  };
  high: {
    url: string;
  };
  medium: {
    url: string;
  };
}

export interface SubscriptionItem {
  id: string;
  contentDetails: {
    newItemCount: number;
    totalItemCount: number;
  };
  snippet: {
    title: string;
    channelId: string;
    description: string;
    resourceId: {
      channelId: string;
    };
    thumbnails: ChannelThumbnails;
  };
}

interface SubscriptionResponse {
  items: Array<SubscriptionItem>;
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
}

interface Params {
  pageToken: string | null;
}

export async function getSubscribedChannels({ pageToken }: Params): Promise<SubscriptionResponse> {
  const { token } = get(authStore);

  const baseUrl = 'https://www.googleapis.com/youtube/v3/subscriptions';
  const params = [
    '?part=snippet%2CcontentDetails%2Cid',
    '&maxResults=50',
    '&mine=true',
    `&access_token=${token}`,
    `${pageToken ? `&pageToken=${pageToken}` : ''}`
  ].join('');
  const url = `${baseUrl}${params}`;

  const res = await fetch(url);
  const data: SubscriptionResponse = await res.json();

  return data;
}
