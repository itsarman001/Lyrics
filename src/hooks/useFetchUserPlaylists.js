import { useState, useEffect } from "react";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";

const useFetchUserPlaylists = (token) => {
  const [dispatch] = useStateProvider;
  const [playlists, setPlaylists] = useState([]);

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

        setPlaylists(formattedPlaylists);
        dispatch({ type: reducerCases.SET_USER_PLAYLISTS, formattedPlaylists });
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    getPlaylistData();
  }, [token]);

  return playlists;
};

export default useFetchUserPlaylists;
