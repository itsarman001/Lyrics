import React from "react";
import { useUserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'
import { IoIosAdd } from "react-icons/io";

const Sidebar = () => {
  const { NAVIGATION_LINKS } = useUserContext()
  return (
    <aside className="fixed top-0 left-0 h-full w-56 bg-primary text-text hidden md:block">
      <div className="py-24">
        <ul className="w-full px-2 flex justify-start flex-col">
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.name} className="w-full hover:bg-background hover:text-primary transition rounded-md text-lg px-2">
              <Link to={link.path} className="flex items-center gap-3 h-12 w-12">
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
          <li className="w-full border-t my-4"></li>
          <li className="w-full my-3 rounded-md text-lg px-3 py-2 bg-background text-primary flex items-center justify-center">
            <Link to="/create-new-playlist" className="flex items-center">
            <span className="text-xl"><IoIosAdd /></span>
            <span className="text-base">New Playlist</span>
            </Link>
          </li>

          <li className="w-full text-center hover:bg-background hover:text-primary transition px-3 py-2 rounded-md">
            <Link to="/liked-song">Liked Songs</Link>
          </li>
          
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
