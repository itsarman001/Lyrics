import { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import axios from "axios";

const useFetchUser = (token) => {
  const [, dispatch] = useStateProvider();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });
        // Fix This
        // This thing is being getting call 4 times or some thing but console.log is showing 4 time
        // console.log(data); 
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
};

export default useFetchUser;
