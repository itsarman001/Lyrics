import React, { useContext } from "react";
import SidebarContext from "./SidebarContext";

const SidebarItem = ({ icon: Icon, text, active }) => {
  const { expanded } = useContext(SidebarContext);
  return (
    <div className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-t from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`} role="listitem">
      <Icon size={32} />
      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
        {text}
      </span>

      {!expanded && (
        <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-text text-primary text-sm invisible group-hover:visible">
          {text}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
