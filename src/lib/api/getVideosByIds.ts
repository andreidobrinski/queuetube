import { get } from 'svelte/store';
import { authStore } from '$lib/auth/authStore';

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Video {
  id: string;
  snippet: {
    title: string;
    publishedAt: string;
    channelTitle: string;
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
      standard: Thumbnail;
      maxres: Thumbnail;
    }
  }
}

interface GetVideosResponse {
  items: Array<Video>
}

export async function getVideosByIds(videoIds: string): Promise<GetVideosResponse> {
  const { token } = get(authStore);

  const baseUrl = 'https://www.googleapis.com/youtube/v3/videos';
  const params = [
    '?part=contentDetails%2Cid%2Csnippet',
    '&maxResults=50',
    `&id=${videoIds}`,
    `&access_token=${token}`,
  ].join('');
  const url = `${baseUrl}${params}`;

  const res = await fetch(url);
  const data: GetVideosResponse = await res.json();

  return data;
}