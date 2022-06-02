import { get } from 'svelte/store';
import { queueStore } from '$lib/queueStore';
import { selectedQueue } from '$lib/selectedQueue';

export function getQueueUrl() {
  const baseUrl = 'https://www.youtube.com/watch_videos?video_ids=';

  const queues = get(queueStore);
  const currentQueue = get(selectedQueue)
  const videoIds = queues[currentQueue]
    .videos
    .map(video => video.id)
    .join(',')

  const url = `${baseUrl}${videoIds}`;

  return url;
}