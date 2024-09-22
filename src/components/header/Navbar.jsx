import React from "react";
import BrandName from "./BrandName";
import SearchBar from "./SearchBar";
import { useUserContext } from "../../context/UserContext";

const Navbar = () => {
  const { NAVIGATION_LINKS } = useUserContext();
  
  return (
    <nav className="flex items-center justify-between w-screen border-b-[1px] border-accent text-text px-4 py-2">
      <div className="flex items-center gap-3 w-1/4">
      <BrandName />
      </div>
      <div className="w-full md:w-4/5 flex items-center gap-4 justify-end">
      <div>
        <ul className=" items-center gap-2 hidden md:flex">
        {NAVIGATION_LINKS.map((link) => (
          <li key={link.name} className="flex items-center gap-2 cursor-pointer hover:bg-secondary hover:text-accent rounded-lg w-full transition duration-300 px-3 py-2">
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </li>
        ))}
        </ul>
      </div>
      <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
