import React, { useState } from "react";
import { BrandName, SearchBar, ProfileDropdownMenu } from "./index";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLogedin, setIslogedin] = useState(false);
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-4">
        <div className="text-3xl text-text">
        <IoMenuOutline />
        </div>
        <Link to="/">
          {" "}
          <BrandName />{" "}
        </Link>
      </div>
      <div className="flex items-center justify-end gap-4 w-full md:w-1/2">
        <SearchBar />

        {isLogedin ? (
          <ProfileDropdownMenu />
        ) : (
          <button className="px-2 py-1 bg-red-400 rounded text-white hover:bg-red-500">
            Log in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
