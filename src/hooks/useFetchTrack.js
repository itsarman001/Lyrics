import { useState, useEffect } from "react";

const useFetchTrack = (trackId) => {
  const [trackData, setTrackData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!trackId) return;

    const fetchTrack = async () => {
      setLoading(true);
      try {
        // Replace with your API call to fetch track data
        const response = await fetch(`https://api.example.com/track/${trackId}`);
        const data = await response.json();
        setTrackData(data);
      } catch (err) {
        setError("Failed to fetch track data");
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
  }, [trackId]);

  return { trackData, loading, error };
};

export default useFetchTrack;
