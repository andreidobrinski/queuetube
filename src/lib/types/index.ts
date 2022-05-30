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

export type SubscriptionItems = Array<SubscriptionItem>

export interface SubscriptionResponse {
  items: SubscriptionItems;
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
}