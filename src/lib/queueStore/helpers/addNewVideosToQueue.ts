import { queueStore } from '$lib/queueStore';
import type { QueueVideo } from '$lib/queueStore/types';

interface Params {
  newVideos: Array<QueueVideo>;
  queueId: string;
}

export function addNewVideosToQueue({ newVideos, queueId }: Params) {

  queueStore.update((queues) => {
    const currentQueue = queues[queueId];
    return {
      ...queues,
      [queueId]: {
        ...currentQueue,
        videos: [...currentQueue.videos, ...newVideos],
      },
    };
  });
}
