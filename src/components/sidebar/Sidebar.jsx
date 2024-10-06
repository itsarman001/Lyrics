import React, { useState } from "react";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { BrandName } from "../index";
import SidebarContext from "./SidebarContext";
import SidebarItem from "./SidebarItem";
import { NAVIGATIONS } from "../../utils/Constants";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`h-screen ${expanded ? "w-52" : "w-16"} transition-width duration-200`}>
      <nav className="h-full flex flex-col bg-secondary border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <span className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}>
            <BrandName />
          </span>

          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="p-1.5 rounded-lg bg-text hover:bg-accent transition-colors duration-200"
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
                active={window.location.pathname === nav.path} 
              />
            ))}
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 text-text">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="User Profile"
            className="w-10 h-10 rounded-md"
          />
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
            <div className="leading-4">
              <h3 className="font-semibold">John Doe</h3>
              <span className="text-xs text-gray-400">kamehameha123@gmail.com</span>
            </div>
            <MoreVertical size={24} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
