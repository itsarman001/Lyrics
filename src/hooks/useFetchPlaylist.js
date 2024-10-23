import { useEffect } from "react";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { useAuthToken } from "./";

const useFetchPlaylist = (playlistId) => {
  const {
    activePlaylistData,
    setActivePlaylistData,
    activePlaylistId,
    setActivePlaylistId,
  } = useStateProvider();
  const { token } = useAuthToken();

  useEffect(() => {
    if (playlistId !== activePlaylistId) {
      setActivePlaylistId(playlistId);
    }

    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/playlists/${playlistId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );

        const selectedPlaylist = {
          playlistId: response.data.id,
          playlistName: response.data.name,
          playlistDescription: response.data.description.startsWith("<a")
            ? ""
            : response.data.description,
          posterSrc: response.data.images[0]?.url, 
          tracks: response.data.tracks.items.map(({ track }) => ({
            id: track.id,
            name: track.name,
            artists: track.artists.map((artist) => artist.name),
            posterSrc: track.album.images[0]?.url,
            duration: track.duration_ms,
            album: track.album.name,
            context_uri: track.album.uri,
            track_number: track.track_number,
          })),
        };
        console.log(response)
        setActivePlaylistData(selectedPlaylist);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylist();
  }, [token, playlistId, activePlaylistId, setActivePlaylistData, setActivePlaylistId]);

  return activePlaylistData;
};

export default useFetchPlaylist;
