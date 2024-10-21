import { useEffect, useState } from "react";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import { useAuthToken } from "./";

const useFetchPlaylist = (playlistId) => {
  const [{ selectedPlaylistId }, dispatch] = useStateProvider();
  const { token } = useAuthToken();
  const [newPlaylist, setNewPlaylist] = useState(null);
  useEffect(() => {
    const fetchPlaylist = async () => {
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
      setNewPlaylist(selectedPlaylist);
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    fetchPlaylist();
  }, [token, dispatch, selectedPlaylistId]);
  return newPlaylist;
};

export default useFetchPlaylist;
