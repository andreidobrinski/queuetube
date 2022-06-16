import dayjs from 'dayjs';
import { queueStore } from '$lib/queueStore';
import type { QueueVideo } from '$lib/queueStore/types';

interface Params {
  video: QueueVideo;
  queueId: string;
}

export function removeVideoFromQueue({ video, queueId }: Params) {
  const { id, channelId } = video;

  queueStore.update((queues) => {
    const currentQueue = queues[queueId];

    // if channel has been removed from queue channels - skip updating latestViewed
    if (!Object.keys(queues[queueId].channels).includes(channelId)) {
      return {
        ...queues,
        [queueId]: {
          ...currentQueue,
          videos: currentQueue.videos.filter((video) => video.id !== id),
        }
      }
    }

    const mostRecentViewedVideoTime =
      currentQueue.channels[channelId].latestViewed?.videoPublishedAt;
    const isDeletedVideoMostRecent = dayjs(video.publishedAt).isAfter(
      dayjs(mostRecentViewedVideoTime)
    );
    const updatedRecentVideo = {
      videoId: video.id,
      videoPublishedAt: video.publishedAt,
    };
    return {
      ...queues,
      [queueId]: {
        ...currentQueue,
        videos: currentQueue.videos.filter((video) => video.id !== id),
        channels: {
          ...currentQueue.channels,
          [channelId]: {
            ...currentQueue.channels[channelId],
            latestViewed: isDeletedVideoMostRecent
              ? updatedRecentVideo
              : { ...currentQueue.channels[channelId].latestViewed },
          },
        },
      },
    };
  });
}