import React from "react";
import { Routes, Route } from "react-router-dom";
import { useStateProvider } from "./utils/StateProvider";
import { Login, Sidebar, Home, Explore, Library } from "./components";
import { useAuthToken, useFetchUser, useFetchUserPlaylists } from "./hooks";

const App = () => {
  const [{ token }] = useStateProvider(); // fetching token from store 
  useAuthToken(); // this will store token into store
  if (!token) return <Login />;
  useFetchUser(token); // this will fetch user data
  const playlists = useFetchUserPlaylists(token); // this will fetch user playlists

  return (
    <main className="h-screen w-screen relative flex items-center gap-0">
      <Sidebar />
      <section className="min-h-full w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </section>
    </main>
  );
};

export default App;
