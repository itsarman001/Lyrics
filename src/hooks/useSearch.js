import { useState, useEffect } from "react";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
const searchEndpoint = import.meta.env.VITE_SPOTIFY_NOCODEAPI_ENDPOINT;

function useSearch(searchEndpoint) {
  const { searchQuery, setSearchQuery, searchResults, setSearchResults } =
    useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === "") {
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(searchEndpoint, {
          params: {
            searchQuery: searchQuery,
          },
        });
        setSearchResults(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery, searchEndpoint]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    isLoading,
    error,
  };
}

export default useSearch;
