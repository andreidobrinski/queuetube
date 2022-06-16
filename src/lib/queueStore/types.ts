import type { ChannelThumbnails } from '$lib/api/getSubscribedChannels';

export interface Queues {
  [key: string]: Queue
}

export interface QueueVideo {
  id: string;
  title: string;
  thumbnails: ChannelThumbnails;
  channelId: string;
  channelTitle: string;
  publishedAt: string;
  duration: string;
  // channelThumbails: ChannelThumbnails;
}

interface Queue {
  name: string;
  channels: {
    [key: string]: Channel
  };
  videos: Array<QueueVideo>
}

export interface Channel {
  id: string;
  name: string;
  thumbnails: ChannelThumbnails;
  latestViewed: {
    videoId: string;
    videoPublishedAt: string;
  },
}