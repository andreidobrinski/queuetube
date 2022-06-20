import { API } from './setupApi';

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
  const params = {
    part: 'snippet,contentDetails,id',
    maxResults: 50,
    mine: true,
    ...(pageToken && {
      pageToken
    })
  }

  const { data } = await API.get('subscriptions', { params });

  return data;
}
