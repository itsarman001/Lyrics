import React, { useEffect, useState } from "react";
import { useStateProvider } from "./utils/StateProvider";
import { Login, Home } from "./components";
import { reducerCases } from "./utils/Constants";

const App = () => {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    try {
      const hash = window.location.hash;
      if (hash) {
        const token = hash.substring(1).split("&")[0].split("=")[1];
        dispatch({ type: reducerCases.SET_TOKEN, token });
        window.location.hash = ""
      }
    } catch (error) {
      console.log(`Error while retriving Token: ${error}`);
    }
  }, [token, dispatch]);

  return (
    <main className="h-screen w-screen relative">
      {token ? <Home /> : <Login />}
    </main>
  );
};

export default App;
