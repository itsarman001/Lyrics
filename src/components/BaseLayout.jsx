import React, { useState } from "react";
import { House, Compass, SquareLibrary } from "lucide-react";
import { Navbar, MobileNav, Sidebar, Home, Explore, Library, Card } from "./";
import { Route, Routes } from "react-router-dom";

const BaseLayout = () => {
  const [isExpended, setIsExpended] = useState(false);
  const src =
    "https://c.saavncdn.com/306/Lost-Found-Hindi-2024-20240517153134-150x150.jpg?bch=480362";
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
    <main className="flex w-screen h-screen relative">
      {/* <Sidebar
        isExpended={isExpended}
        NAVIGATIONS={NAVIGATIONS}
        setIsExpended={setIsExpended}
      /> */}
      <section className="flex-1">
        <Navbar isExpended={isExpended} setIsExpended={setIsExpended} />
        <div>
          <Routes>
            <Route path="/" element={Home} />
            <Route path="/explore" element={Explore} />
            <Route path="/library" element={Library} />
          </Routes>
        </div>
        <div className="p-4">
          <Card
            isRounded={false}
            src={src}
            alt="Lost and Found, Ishq"
            name="Ishq, Lost and Found"
            desc="Lost;Found  by Amir Ameer, Faheem Abdullah, Rauhan Malik"
            id="1234"
          />
        </div>
      </section>
      <section className="md:hidden">
        <MobileNav NAVIGATIONS={NAVIGATIONS} />
      </section>
    </main>
  );
};

export default BaseLayout;
