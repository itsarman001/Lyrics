import React, { useEffect } from "react";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";

const Home = () => {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });
        console.log(data)
        const userInfo = {
          userName: data.display_name,
          userId: data.id,
          userEmail: data.email,
          userProfilePicture: data.images[1]?.url,
        };
        dispatch({ type: reducerCases.SET_USER, userInfo });
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    if (token) {
      getUserInfo();
    }
  }, [token, dispatch]);

  return (
    <section className="flex items-center justify-between">Home</section>
  );
};

export default Home;
