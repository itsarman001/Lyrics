import React from "react";
import { BrandName, SearchBar } from "..";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-primary">
      <Link to="/">
        <BrandName className="text-3xl text-neutral" />
      </Link>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
