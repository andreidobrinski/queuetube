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
    thumbnails: {
      default: {
        url: string;
      };
      high: {
        url: string;
      };
      medium: {
        url: string;
      };
    };
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