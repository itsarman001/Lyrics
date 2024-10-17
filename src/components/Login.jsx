import React from "react";
import { BrandName } from "./";

const Login = () => {
  return (
    <section className="bg-primary text-neutral grid place-content-center h-screen w-screen text-center gap-8">
      <BrandName size="text-5xl" />
      <button className="bg-accent hover:bg-hover px-5 py-2 text-nowrap text-lg font-medium hover:text-white font-inter transition delay-300 rounded-full border-neutral border-2 shadow-md">
        Sign-in with Spotify
      </button>
    </section>
  );
};

export default Login;
