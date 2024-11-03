import { useEffect, useState } from "react";

const useAuthToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const tokenFromUrl = hash
        .substring(1)
        .split("&")
        .find((param) => param.startsWith("access_token"))
        ?.split("=")[1];
      if (tokenFromUrl) {
        setToken(tokenFromUrl);

        sessionStorage.setItem("access_token", tokenFromUrl);

        window.location.hash = "";
      }
    } else {
      // Retrieve token from local storage if it's not in the URL
      const storedToken = sessionStorage.getItem("access_token");
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, []);

  const clearToken = () => {
    setToken(null);
    sessionStorage.removeItem("access_token");
  };

  return { token, clearToken };
};

export default useAuthToken;