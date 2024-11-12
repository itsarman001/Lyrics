import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthToken } from ".";

const useFetchNewReleases = (limit = 10, offset = 0) => {
  const { token } = useAuthToken();
  const [releases, setReleases] = useState(null);

  useEffect(() => {
    const getReleases = async () => {
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/browse/new-releases?limit=${limit}&offset=${offset}`,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );

        const newReleases = response.data.albums.items.map((album) => ({
          id: album.id,
          name: album.name,
          artists: album.artists.map((artist)=> (artist.name)),
          images: album.images[0]?.url,
          total_tracks: album.total_tracks,
        }));

        setReleases(newReleases);
      } catch (error) {
        console.log(`Failed to load new releases: ${error}`);
      }
    };
    if (token) getReleases();
  }, [token]);

  return releases;
};

export default useFetchNewReleases;
