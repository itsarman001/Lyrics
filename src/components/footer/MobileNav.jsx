import React from "react";
import { useUserContext } from "../../context/UserContext";

const MobileNav = () => {
  const { NAVIGATION_LINKS } = useUserContext();
  return (
    <nav className="absolute bottom-0 left-0 w-full">
      <ul className="flex items-center justify-between px-4 py-2 text-text">
        {NAVIGATION_LINKS.map((link) => (
          <li key={link.name} className="flex items-center gap-1 flex-col hover:bg-secondary w-full transition px-2 py-1">
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
