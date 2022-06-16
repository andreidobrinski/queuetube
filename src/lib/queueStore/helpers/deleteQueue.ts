import { queueStore } from '$lib/queueStore';

export function deleteQueue(queueId: string) {
  queueStore.update((queues) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [queueId]: queue, ...rest } = queues;
    return rest;
  });
}
