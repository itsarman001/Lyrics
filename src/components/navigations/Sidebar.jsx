import React from "react";
import { Link } from "react-router-dom";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { BrandName } from "..";

const Sidebar = ({
  className = "",
  NAVIGATIONS,
  isExpended,
  setIsExpended,
}) => {
  return (
    <aside
      className={`${className} ${
        isExpended ? "w-64" : "w-24"
      } p-4 bg-primary h-full overflow-hidden`}
    >
      <div className="flex items-center justify-between gap-4 mb-8">
        {BrandName && (
          <div className={`${isExpended ? "block" : "hidden"}`}>
            <BrandName className="text-4xl text-neutral" />
          </div>
        )}
        <button onClick={() => setIsExpended(!isExpended)}>
          {isExpended ? (
            <CircleChevronLeft size={30} color="#00ADB5" />
          ) : (
            <CircleChevronRight size={30} color="#00ADB5" />
          )}
        </button>
      </div>

      <div>
        <ul className="w-full">
          {NAVIGATIONS.map((navigation) => (
            <li key={navigation.path} className="w-full">
              <Link
                to={navigation.path}
                className="group  flex items-center py-4 text-neutral hover:text-accent"
              >
                <span className=" text-neutral px-4 p-1 rounded-full transition-colors duration-300 ease-in-out">
                  {navigation.icon}
                </span>
                <span className={`text-xl ${isExpended ? "" : ""}`}>
                  {navigation.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
