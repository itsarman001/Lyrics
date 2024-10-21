import { useEffect } from "react";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import useAuthToken from "./useAuthToken";

const useFetchUserPlaylists = () => {
  const { userPlaylist, setUserPlaylist } = useStateProvider();
  const { token } = useAuthToken();

  useEffect(() => {
    const getPlaylistData = async () => {
      if (!token) return;

      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/playlists",
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );

        const formattedPlaylists = response.data.items.map((item) => {
          const { url: imageUrl, width, height } = item.images[0] || {};

          return {
            id: item.id,
            name: item.name,
            imageUrl,
            imageWidth: width,
            imageHeight: height,
          };
        });

        setUserPlaylist(formattedPlaylists);
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    getPlaylistData();
  }, [token]);

  return userPlaylist;
};

export default useFetchUserPlaylists;
