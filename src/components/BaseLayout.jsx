import React, { useState } from "react";
import { House, Compass, SquareLibrary } from "lucide-react";
import {
  Navbar,
  MobileNav,
  Sidebar,
  Home,
  Explore,
  Library,
  PlayerBar,
} from "./";
import { Route, Routes } from "react-router-dom";

const BaseLayout = () => {
  const [isExpended, setIsExpended] = useState(false);
  const NAVIGATIONS = [
    {
      icon: <House />,
      title: "Home",
      path: "/",
    },
    {
      icon: <Compass />,
      title: "Explore",
      path: "/explore",
    },
    {
      icon: <SquareLibrary />,
      title: "Library",
      path: "/library",
    },
  ];

  const src =
    "https://a10.gaanacdn.com/gn_pl_img/playlists/P7m3GNKqxo/7m3GQwOybq/size_m_1728637264.jpg";

  return (
    <main className="flex w-screen h-screen relative overflow-x-hidden">
      {/* <Sidebar
        isExpended={isExpended}
        NAVIGATIONS={NAVIGATIONS}
        setIsExpended={setIsExpended}
      /> */}
      <section className="flex-1 flex flex-col justify-between">
        <Navbar isExpended={isExpended} setIsExpended={setIsExpended} />
        <div className="h-full bg-secondary text-neutral flex-1 overflow-y-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </div>
        <div>
          <PlayerBar />
          <div className="md:hidden">
            <MobileNav NAVIGATIONS={NAVIGATIONS} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default BaseLayout;
