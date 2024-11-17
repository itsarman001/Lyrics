import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthToken } from "./";

const useFetchTracks = (id, type, additionalParams = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useAuthToken();

  // Determine the query path based on the type
  const query = getQueryPath(id, type);

  // Memoize additionalParams to prevent unnecessary re-fetching
  const stableParams = JSON.stringify(additionalParams);

  useEffect(() => {
    if (!id || !type || !query) {
      setError("Invalid ID or type provided");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://api.spotify.com/v1/${query}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          params: type === "artist-tracks" ? { market: additionalParams.market || "US" } : {},
        });

        const normalizedData = normalizeData(response.data, type);
        setData(normalizedData);
      } catch (err) {
        setError(`Failed to load data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchData();
  }, [id, type, token, query, stableParams]);

  return { data, loading, error };
};

// Helper function to determine the query path
const getQueryPath = (id, type) => {
  switch (type) {
    case "artist":
      return `artists/${id}`;
    case "album":
      return `albums/${id}`;
    case "playlist":
      return `playlists/${id}`;
    case "artist-tracks":
      return `artists/${id}/top-tracks`;
    default:
      return null;
  }
};

// Helper function to normalize API response
const normalizeData = (response, type) => {
  switch (type) {
    case "artist":
      return {
        id: response.id,
        name: response.name,
        image: response.images?.[0]?.url || "",
        type: "artist",
        additionalInfo: {
          genres: response.genres,
          popularity: response.popularity,
        },
      };
    case "album":
      return {
        id: response.id,
        name: response.name,
        image: response.images?.[0]?.url || "",
        type: "album",
        additionalInfo: {
          artists: response.artists.map((artist) => ({
            id: artist.id,
            name: artist.name,
          })),
          releaseDate: response.release_date,
          tracks: response.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
            duration: track.duration_ms,
            image: track.album?.images?.[0]?.url || "",
          })),
        },
      };
    case "playlist":
      return {
        id: response.id,
        name: response.name,
        image: response.images?.[0]?.url || "",
        type: "playlist",
        additionalInfo: {
          owner: response.owner.display_name,
          tracks: response.tracks.items.map((item) => ({
            id: item.track.id,
            name: item.track.name,
            artists: item.track.artists.map((artist) => artist.name),
            album: item.track.album.name,
            image: item.track.album?.images?.[0]?.url || "",
          })),
        },
      };
    case "artist-tracks":
      return {
        id: response.tracks?.[0]?.artists?.[0]?.id || "",
        name: response.tracks?.[0]?.artists?.[0]?.name || "",
        type: "artist-tracks",
        additionalInfo: {
          tracks: response.tracks.map((track) => ({
            id: track.id,
            name: track.name,
            duration: track.duration_ms,
            album: track.album.name,
            image: track.album?.images?.[0]?.url || "",
          })),
        },
      };
    default:
      return null;
  }
};

export default useFetchTracks;
