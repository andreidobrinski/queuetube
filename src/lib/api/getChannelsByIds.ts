import { API } from './setupApi';

interface Channel {
  id: string;
  contentDetails: {
    relatedPlaylists: {
      uploads: string;
    }
  }
}

interface GetChannelsResponse {
  items: Array<Channel>
}

export async function getChannelsByIds(channelIds: string): Promise<GetChannelsResponse> {
  const params = {
    part: 'contentDetails,id,snippet',
    id: channelIds
  };

  const { data } = await API.get('channels', { params });

  return data;
}