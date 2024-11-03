import { useEffect } from "react";
import axios from "axios";
import { useAuthToken } from "./";
import { useStateProvider } from "../utils/stateProvider";

const useFetchPlaylist = () => {
  const { activePlaylistData, setActivePlaylistData, activePlaylistId } =
    useStateProvider();
    
  const { token } = useAuthToken();
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/playlists/${activePlaylistId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );

        const playlistData = {
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
          followers: response.data.followers.total,
          imageUrl: response.data.images?.[0]?.url || "",
          tracks: response.data.tracks.items.map((item) => ({
            id: item.track.id,
            name: item.track.name,
            artist: item.track.artists[0]?.name,
            album: item.track.album.name,
            previewImg: item.track.images?.[0]?.url || "",
            duration: item.track.duration_ms,
            previewUrl: item.track.preview_url,
            url: item.track.external_urls.spotify,
          })),
        };

        setActivePlaylistData(playlistData);
      } catch (error) {
        console.log(`Failed to load playlist data: ${error}`);
      }
    };

    if (token) fetchPlaylist();
  }, [token]);

  return activePlaylistData;
};

export default useFetchPlaylist;
