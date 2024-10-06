import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useStateProvider } from "./utils/StateProvider";
import { Login, Sidebar, Navbar, Home, Explore, Library } from "./components";
import { reducerCases } from "./utils/Constants";

const App = () => {
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
      console.log(`Error while retriving Token: ${error}`);
    }
  }, [token, dispatch]);

  if (!token) return <Login />;

  return (
    <main className="h-screen w-screen relative flex items-center gap-0">
      <Sidebar />
      <section className="min-h-full w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      </section>
    </main>
  );
};

export default App;
