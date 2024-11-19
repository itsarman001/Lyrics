import { useState, useEffect } from "react";
import axios from "axios";
import useAuthToken from "./useAuthToken";

const useFetchTrack = (trackId) => {
  const [trackData, setTrackData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { token } = useAuthToken();

  useEffect(() => {
    if (!trackId || !token) return;

    const fetchTrack = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.spotify.com/v1/tracks/${trackId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );
        const trackDetails = {
          album: {
            name: data.album.name,
            id: data.album.id,
            releaseDate: data.album.release_date,
            total_tracks: data.album.total_tracks,
            type: data.album.type,
            images: data.album.images[0]?.url,
          },
          track: {
            name: data.name,
            id: data.id,
            artists: data.artists.map((artist) => artist.name),
            durations: data.duration_ms,
            preview_url: data.preview_url,
            type: data.type,
          },
        };
        setTrackData(trackDetails);
      } catch (err) {
        setError(
          err.response?.data?.error?.message || "Failed to fetch track data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
  }, [trackId, token]);

  return { trackData, loading, error };
};

export default useFetchTrack;
