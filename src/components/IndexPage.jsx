import React from "react";
import { Routes, Route } from "react-router-dom";
import { Sidebar, Home, Explore, Library, PlayerSection } from "./index";
import { useFetchUser, useFetchUserPlaylists } from "../hooks"; 
const IndexPage = () => {
  const playlists = useFetchUserPlaylists(); 
  useFetchUser()

  return (
    <main className="flex h-screen w-screen overflow-hidden bg-gray-900 text-white">
      <section className="h-full">
        <Sidebar className="h-full overflow-y-auto" />
      </section>
      <section className="flex-1 h-full flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
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

export default IndexPage;
