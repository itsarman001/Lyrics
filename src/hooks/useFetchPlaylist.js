import { useEffect } from "react";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";

const useFetchPlaylist = () => {
  const [{ token, selectedPlaylistId }, dispatch] = useStateProvider();

  useEffect(() => {
    const fetchPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const playlistData = {
        playlistId: response.data.id,
        playlistName: response.data.name,
        playlistDescription: response.data.description.startsWith("<a")
          ? ""
          : response.data.description,
        posterSrc: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          posterSrc: track.album.images[0].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      dispatch({ type: reducerCases.SET_PLAYLIST, playlistData });
    };
    fetchPlaylist();
  }, [token, dispatch, selectedPlaylistId]);
};

export default useFetchPlaylist;
