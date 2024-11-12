import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthToken } from ".";

const useFetchCategories = (limit = 10, offset = 0) => {
  const { token } = useAuthToken();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/browse/categories?limit=${limit}&offset=${offset}`,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );

        const data = response.data.categories.items.map((category) => ({
          name: category.name,
          icon: category.icons[0]?.url, 
          id: category.id,
        }));

        setCategories(data);
      } catch (error) {
        console.log(`Failed to load Categories: ${error}`);
      }
    };
    if (token) getCategories();
  }, [token]);

  return categories;
};

export default useFetchCategories;
