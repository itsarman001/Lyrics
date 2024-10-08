import React, { useState } from "react";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { BrandName, UserDetails } from "../index";
import SidebarContext from "./SidebarContext";
import SidebarItem from "./SidebarItem";
import { NAVIGATIONS } from "../..//utils/Constants";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={`h-screen ${
        expanded ? "w-52" : "w-16"
      } transition-width duration-200`}
    >
      <nav className="h-full flex flex-col bg-secondary border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <span
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          >
            <BrandName size="w-32" />
          </span>

          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="p-1.5 rounded-lg bg-gradient-to-t from-indigo-200 to-indigo-100 text-indigo-800 transition-colors duration-200"
          >
            {expanded ? <ChevronFirst size={24} /> : <ChevronLast size={24} />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 py-4">
            {NAVIGATIONS.map((nav, index) => (
              <SidebarItem
                key={index}
                icon={nav.icon}
                text={nav.title}
                path={nav.path}
                active={window.location.pathname === nav.path}
              />
            ))}
          </ul>

          <UserDetails />
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
};

export default Sidebar;
