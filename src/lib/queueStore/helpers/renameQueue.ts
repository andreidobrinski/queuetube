import { queueStore } from '$lib/queueStore';

interface Params {
  queueId: string;
  newQueueName: string;
}

export function renameQueue({ queueId, newQueueName }: Params) {
  queueStore.update((queues) => {
    const queueValues = queues[queueId];
    const withRenamedQueue = {
      ...queues,
      [newQueueName]: { ...queueValues, name: newQueueName },
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [queueId]: queue, ...rest } = withRenamedQueue;
    return rest;
  });
}