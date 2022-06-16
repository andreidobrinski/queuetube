import { queueStore } from '$lib/queueStore';

export function addQueue(queueId: string) {
  queueStore.update((value) => {
    return { ...value, [queueId]: { name: queueId, channels: {}, videos: [] } };
  });
}