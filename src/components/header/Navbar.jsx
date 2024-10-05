import React from "react";
import { BrandName, SearchBar } from "../index";

const Navbar = () => {
  return <nav className="flex items-center justify-between px-4 py-2 ">
    <BrandName />
    <SearchBar />

  </nav>;
};

export default Navbar;
