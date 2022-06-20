import { API } from './setupApi';

interface PlaylistItem {
  id: string;
  contentDetails: {
    videoId: string;
  }
}

interface GetPlaylistItemsResponse {
  items: Array<PlaylistItem>
}

export async function getPlaylistItemsById(playlistId: string): Promise<GetPlaylistItemsResponse> {
  const params = {
    part: 'contentDetails,id,snippet',
    maxResults: 50,
    playlistId
  };

  const { data } = await API.get('playlistItems', { params });

  return data;
}