import React from "react";
import { Navbar, Sidebar, SidebarItems, Library, Footer } from "./index";
import { NAVIGATIONS } from "../utils/Constants";

const Home = () => {
  return (
    <section className="bg-primary w-full">
      {/* Lyrics Body */}
      <div className="w-2/5">
        {/* Sidebar Section */}
        <Sidebar children={
          NAVIGATIONS.map((elem)=>(
            <SidebarItems text={elem.title} icon={elem.icon}/>
          ))
        }/>
        {/* Main Body */}
        <div>
          {/* Navbar */}
          <Navbar />
          {/* Library */}
          <div>
            <Library />
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
