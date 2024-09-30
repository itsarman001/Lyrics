import React, { useState, useEffect } from "react";
import { loginEndpoint } from "../../hooks/useSpotify";

const LoginForm = () => {
  const spotifyAuthLink = loginEndpoint
  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    console.log(hash)
  
    return
  }, [])
  

  return (
    <div className="text-center text-wrap border-2 bg-secondary p-2 md:p-4 lg:p-5 h-40 w-fit mx-auto mt-40 flex items-center justify-center flex-col gap-4 rounded-md">
      <p className="text-text">
        This app uses the Spotify API. Please use your Spotify account to log
        in.
      </p>
      <a href={spotifyAuthLink}>
        <button
          className="px-4 py-2 rounded-full uppercase font-semibold mx-auto my-4 bg-accent text-text hover:text-primary hover:bg-text transition"
          disabled={!spotifyAuthLink}
        >
          Login with Spotify
        </button>
      </a>
    </div>
  );
};

export default LoginForm;
