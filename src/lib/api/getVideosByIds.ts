import { API } from './setupApi';

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
    channelId: string;
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
      standard: Thumbnail;
      maxres: Thumbnail;
    }
  },
  contentDetails: {
    duration: string;
  }
}

interface GetVideosResponse {
  items: Array<Video>
}

export async function getVideosByIds(videoIds: string): Promise<GetVideosResponse> {
  const params = {
    part: 'contentDetails,id,snippet',
    maxResults: 50,
    id: videoIds
  };

  const { data } = await API.get('videos', { params });

  return data;
}