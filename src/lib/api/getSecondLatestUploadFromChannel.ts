import { API } from './setupApi';

interface ChannelResponse {
  data: {
    items: Array<{
      contentDetails: {
        relatedPlaylists: {
          uploads: string;
        }
      }
    }>
  }
}

interface PlaylistItem {
  id: string;
  contentDetails: {
    videoId: string;
    videoPublishedAt: string;
  }
}

interface PlaylistResponse {
  data: {
    items: Array<PlaylistItem>;
  }
}

export async function getSecondLatestUploadFromChannel(channelId: string): Promise<PlaylistItem> {
  const channelParams = {
    part: 'contentDetails,id,snippet,topicDetails',
    id: channelId
  };

  const { data: channelData }: ChannelResponse = await API.get('channels', { params: channelParams });

  const uploadPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

  const playlistParams = {
    part: 'contentDetails,id,snippet',
    maxResults: 5,
    playlistId: uploadPlaylistId
  };

  const { data: playlistData }: PlaylistResponse = await API.get('playlistItems', { params: playlistParams });

  return playlistData.items[1];
}