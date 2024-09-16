import React, { useState } from "react";
import BrandName from "./BrandName";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile.jsx";
import { RiMenu4Fill } from "react-icons/ri";

function Navbar() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <nav className="flex justify-between items-center px-5 py-6">
      <div className="flex items-center gap-2">
      <RiMenu4Fill className="text-2xl" />
      <BrandName />
      </div>
      <SearchBar />
      {isLogedIn ? <UserProfile /> : <button className="bg-gray-200 px-3 py-1 rounded-md">Login</button>}
    </nav>
  );
}

export default Navbar;
