import React from "react";
import { SiZedindustries } from "react-icons/si";

const BrandName = ({ className }) => {
  return (
    <h2 className={` font-edu-au-vic-wa-nt-guides cursor-pointer ${className}`}>
      <span className="text-accent ">L</span>
      <span className="underline">yrics</span>
    </h2>
  );
};

export default BrandName;
