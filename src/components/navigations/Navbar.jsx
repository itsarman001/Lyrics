import React from "react";
import { BrandName, SearchBar } from "..";
import { Link } from "react-router-dom";

const Navbar = ({ isExpended, setIsExpended }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-primary">
      <div>
        <Link to="/">
          <BrandName className="text-4xl text-neutral" />
        </Link>
      </div>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
