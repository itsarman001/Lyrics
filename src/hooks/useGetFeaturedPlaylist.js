import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthToken } from "./";
const useGetFeaturedPlaylist = (limit = 10) => {
  const [featuredPlaylist, setFeaturedPlaylist] = useState(null);
  const { token } = useAuthToken();

  useEffect(() => {
    const getFeaturedPlaylists = async () => {
      if (!token) return;

      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/browse/featured-playlists/?&limit=${limit}`,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );
        const data = {
          sectionName: response.data.message,
          playlists: response.data.playlists.items.map((playlist) => ({
            title: playlist.name,
            subtitle: playlist.description,
            id: playlist.id,
            poster: playlist.images[0].url,
          })),
        };
        console.log(data)
        setFeaturedPlaylist(data);
      } catch (error) {
        console.error("Error fetching featured playlists:", error);
      }
    };

    getFeaturedPlaylists();
  }, [token]);

  return featuredPlaylist;
};

export default useGetFeaturedPlaylist;
