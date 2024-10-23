import { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import useAuthToken from './useAuthToken'
import axios from "axios";

const useFetchUser = () => {
  const { userInfo, setUserInfo } = useStateProvider();
  const { token } = useAuthToken();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });

        const currentUserInfo = {
          userName: data.display_name,
          userId: data.id,
          userEmail: data.email,
          userProfilePicture:
            data.images.length > 0 ? data.images[0]?.url : null,
        };

        setUserInfo(currentUserInfo);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    if (token) getUserInfo();
  }, [token, setUserInfo]);

  return userInfo;
};

export default useFetchUser;
