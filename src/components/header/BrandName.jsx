import React from "react";
import { Link } from "react-router-dom";

const BrandName = () => {
  return (
    <div className="text-xl text-text hover:text-accent font-semibold transition duration-300 cursor-pointer">
      <Link to="/">RemixPlayer</Link>
    </div>
  );
};

export default BrandName;
