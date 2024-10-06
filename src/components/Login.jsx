import React from "react";
import useAuth from "../hooks/useAuth";
import { BrandName } from "./index";

const Login = () => {
  return (
    <section className="h-screen w-screen bg-primary text-center flex flex-col items-center justify-center text-text">
      <BrandName size="w-80" />
      <button
        onClick={useAuth}
        className="px-4 py-2 my-3 mx-auto mt-12 bg-secondary border-accent transition-colors delay-200 hover:bg-accent border-2 rounded-full "
      >
        Login with Spotify
      </button>
    </section>
  );
};

export default Login;
