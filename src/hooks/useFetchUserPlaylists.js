import { useEffect } from "react";
import axios from "axios";
import { useStateProvider } from "../utils/stateProvider";
import useAuthToken from "./useAuthToken";

const useFetchUserPlaylists = () => {
  const { userPlaylist, setUserPlaylist } = useStateProvider();
  const { token } = useAuthToken();

  useEffect(() => {
    const fetchPlaylists = async () => {
      if (!token) return; 

      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/playlists",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const playlists = response.data.items.map((playlist) => ({
          id: playlist.id || "unknown_id", 
          title: playlist.name || "Untitled Playlist",
          subtitle: playlist.description || "No description available",
          poster: playlist.images.length > 0 ? playlist.images[0].url : "",
        }));

        // Set the playlist data in context only if it's updated
        if (JSON.stringify(userPlaylist) !== JSON.stringify(playlists)) {
          setUserPlaylist(playlists);
        }
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    fetchPlaylists();
  }, [token, setUserPlaylist, userPlaylist]);

  return userPlaylist;
};

export default useFetchUserPlaylists;
