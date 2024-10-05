import React, { createContext, useContext, useState } from "react";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { BrandName } from "../index";

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-secondary border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* <span
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          >
            <BrandName />
          </span> */}
          {/* Temporary Logo */}
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="p-1.5 rounded-lg bg-text hover:bg-accent "
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 text-text">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="User Profile"
            className="w-10 h-10 rounded-md "
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h3 className="font-semibold">John Doe</h3>
              <span className="text-xs text-gray-400">
                kamehameha123@gmail.com
              </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

export const SidebarItems = ({ icon, text, active }) => {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-t from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
      role="listitem"
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {!expanded && (
        <div
        className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opcacity-100 group-hover:translate-x-0`}
        >{text}</div>
      )}
    </li>
  );
};
