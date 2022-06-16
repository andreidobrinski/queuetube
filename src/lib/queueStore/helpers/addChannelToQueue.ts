import { queueStore } from '$lib/queueStore';
import type { Channel } from '$lib/queueStore/types';

interface Params {
  queueId: string;
  newChannel: Channel;
}

export function addChannelToQueue({ queueId, newChannel }: Params) {
  queueStore.update((queues) => {
    const currentQueue = queues[queueId];
    return {
      ...queues,
      [queueId]: {
        ...currentQueue,
        channels: {
          ...currentQueue.channels,
          [newChannel.id]: newChannel,
        },
      },
    };
  });
}