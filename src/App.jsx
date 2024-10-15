import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useStateProvider } from "./utils/StateProvider";
import {
  Login,
  Sidebar,
  Home,
  Explore,
  Library,
  PlayerSection,
} from "./components";
import { useAuthToken, useFetchUser, useFetchUserPlaylists } from "./hooks";

const App = () => {
  const [{ token }] = useStateProvider();
  useAuthToken();
  useFetchUser(token);
  const playlists = useFetchUserPlaylists(token);

  if (!token) return <Login />;

  return (
    // <main className="h-screen w-screen overflow-hidden flex gap-0">
    //   <section>
    //     <Sidebar className="h-full overflow-y-auto" />
    //   </section>
    //   <section className="h-full w-full overflow-y-auto">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/explore" element={<Explore />} />
    //       <Route path="/library" element={<Library />} />
    //     </Routes>
    //     <footer className="">
    //     <PlayerSection />
    //   </footer>
    //   </section>
      
    // </main>
    <main className="flex h-screen w-screen overflow-hidden bg-gray-900 text-white">
      <section className="h-full ">
        <Sidebar className="h-full overflow-y-auto" />
      </section>
      <section className="flex-1 h-full flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </div>
        <footer className="h-24">
          <PlayerSection />
        </footer>
      </section>
    </main>
  );
};

export default App;
