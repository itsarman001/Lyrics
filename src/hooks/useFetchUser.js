import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthToken } from "./";
import { useStateProvider } from "../utils/StateProvider";

const useFetchUser = () => {
  const { token } = useAuthToken();
  const { userInfo, setUserInfo } = useStateProvider();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });

        const currentUser = {
          name: data.display_name || "",
          email: data.email || "",
          followers: data.followers.total || "",
          profile: data.images.length > 0 ? data.images[0].url : "",
          id: data.id || "",
          profileUrl: data.external_urls.spotify || "",
        };

        setUserInfo(currentUser);
      } catch (error) {
        console.log(`Failed to load user info: ${error}`);
      }
    };
    if (token) getUserInfo();
  }, [token]);
  return userInfo;
};

export default useFetchUser;
