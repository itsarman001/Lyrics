import { useEffect, useState } from "react";
import axios from "axios";
import useAuthToken from "./useAuthToken"; // Assuming this provides the authorization token

const useFetchAlbum = (albumId) => {
  const [albumDetails, setAlbumDetails] = useState(null); // Initial state for loading
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Store potential errors

  const { token } = useAuthToken();

  useEffect(() => {
    const fetchAlbum = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear previous error

      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/albums/${albumId}/tracks`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Template literal for cleaner string interpolation
              "Content-Type": "application/json",
            },
          }
        );

        setAlbumDetails(response.data); // Set data only on successful response
      } catch (error) {
        console.error("Failed to load album details:", error); // Log the error for debugging
        setError(error); // Store the error for potential UI display
      } finally {
        setIsLoading(false); // Ensure loading state is set to false even on error
      }
    };

    if (token) {
      fetchAlbum();
    } else {
      console.warn("useFetchAlbum: Missing authorization token"); // Handle missing token
    }
  }, [token, albumId]); // Dependency array includes both token and albumId

  return { albumDetails, isLoading, error };
};

export default useFetchAlbum;