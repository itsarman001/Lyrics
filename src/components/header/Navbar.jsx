import React from "react";
import BrandName from "./BrandName";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile.jsx";
import { RiMenu4Fill } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-5 py-6 relative">
      <div className="flex items-center gap-4">
        <RiMenu4Fill className="text-2xl hidden md:block lg:text-text" />
        <BrandName />
      </div>
      <div className="flex items-center gap-2 w-4/5 justify-end">
        <SearchBar />
        <div className="hidden md:block">
        <UserProfile />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
