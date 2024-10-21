import React, { useState } from "react";
import { House, Compass, SquareLibrary } from "lucide-react";
import {
  Login,
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

  return (
    <main className="flex w-screen h-screen relative overflow-x-hidden">
      <Sidebar />
      <section className="flex-1 flex flex-col justify-between">
        <Navbar isExpended={isExpended} setIsExpended={setIsExpended} />
        <div className="h-full bg-secondary text-neutral flex-1 overflow-y-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/library/:id" element={<Library />} />
            <Route path="/login" element={<Login />} />
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
