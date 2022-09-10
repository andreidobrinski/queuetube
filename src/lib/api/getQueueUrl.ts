import { get } from 'svelte/store';
import { queueStore } from '$lib/queueStore';
import { selectedQueue } from '$lib/selectedQueue';

/*
note: the following url can be used to start the playlist at a given index
it works on desktop but not when linking to the youtube app on mobile
  `${queueUrl}&index=${videoIndex}`
instead this function accepts an optional videoId arg
and will use the videoId as the starting point
*/

export function getQueueUrl(videoId?: string) {
  const baseUrl = 'https://www.youtube.com/watch_videos?video_ids=';

  const queues = get(queueStore);
  const currentQueue = get(selectedQueue)

  const videoIds = queues[currentQueue].videos.map(video => video.id);

  let videoIdString = videoIds.join(',');

  if (videoId) {
    const indexOfSelectedId = videoIds.indexOf(videoId);
    const videosAfterSelectedId = videoIds.slice(indexOfSelectedId);
    videoIdString = videosAfterSelectedId.join(',');
  }

  const url = `${baseUrl}${videoIdString}`;

  return url;
}