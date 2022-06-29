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

export async function getVideosByIds(videoIds: Array<string>): Promise<GetVideosResponse> {
  // YouTube API will break if `id` param has more than 50 ids

  const baseParams = {
    part: 'contentDetails,id,snippet',
    maxResults: 50,
  };

  if (videoIds.length < 50) {
    const params = {
      ...baseParams,
      id: videoIds.join(',')
    };

    const { data } = await API.get('videos', { params });

    return data;
  }

  // find out how many calls need to be made
  const videoIdGroupCount = Math.ceil(videoIds.length / 50);

  // make a call for each group of videoIds
  const newVideoIds = await Promise.all([...Array(videoIdGroupCount)].map(async (_, index) => {
    const slicedVideoIds = videoIds.slice(index * 50, (index + 1) * 50);

    const params = {
      ...baseParams,
      id: slicedVideoIds.join(',')
    };

    const { data } = await API.get('videos', { params });

    return data;
  }));

  // flatten items inside a single array
  const items = newVideoIds.flatMap(group => group.items);

  return { items };
}