import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { NAVIGATIONS } from "./Navigations";

const MobileNav = () => {

  

  return (
    <nav className="bg-primary border-t-2 border-neutral fixed bottom-0 left-0 w-full h-16 flex justify-between items-center px-4 shadow-md">
      <ul className="flex space-x-4 items-center justify-between w-full">
        {NAVIGATIONS.map((navigation) => (
          <li key={navigation.path}>
            <Link
              to={navigation.path}
              className="group flex flex-col items-center py-4 text-neutral hover:text-accent"
            >
              <span className="group-hover:bg-accent text-neutral px-4 p-1 rounded-full transition-colors duration-300 ease-in-out">
                {navigation.icon}
              </span>
              <span className="text-xs md:text-sm">{navigation.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
