import { useEffect } from "react";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";

const useAuthToken = () => {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    try {
      const hash = window.location.hash;
      if (hash) {
        const token = hash.substring(1).split("&")[0].split("=")[1];
        dispatch({ type: reducerCases.SET_TOKEN, token });
        window.location.hash = "";
      }
    } catch (error) {
      console.log(`Error while retrieving token: ${error}`);
    }
  }, [dispatch, token]);
};

export default useAuthToken;