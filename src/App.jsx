import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useStateProvider } from "./utils/StateProvider";
import { Login, Sidebar, Home, Explore, Library } from "./components";
import { useAuthToken, useFetchUser, useFetchUserPlaylists } from "./hooks";

const App = () => {
  const [{ token }] = useStateProvider();
  useAuthToken();
  useFetchUser(token);
  const playlists = useFetchUserPlaylists(token);

  if (!token) return <Login />;

  return (
    <main className="h-screen w-screen overflow-hidden flex gap-0">
      <Sidebar className="h-full overflow-y-auto" />
      <section className="h-full w-full overflow-y-auto">
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
