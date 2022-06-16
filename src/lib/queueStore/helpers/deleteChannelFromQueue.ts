import { queueStore } from '$lib/queueStore';

interface Params {
  channelId: string;
  queueId: string;
}

export function deleteChannelFromQueue({ channelId, queueId }: Params) {
  queueStore.update((queues) => {
    const currentQueue = queues[queueId];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [channelId]: deletedChannel, ...remainderChannels } = currentQueue.channels;
    return {
      ...queues,
      [queueId]: {
        ...currentQueue,
        channels: remainderChannels,
      },
    };
  });
}