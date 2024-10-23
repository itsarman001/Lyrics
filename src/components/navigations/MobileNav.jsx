import React from "react";
import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
import { useStateProvider } from "../../utils/StateProvider";

const MobileNav = ({ NAVIGATIONS }) => {
  const { userInfo } = useStateProvider(); 

  return (
    <nav className="bg-primary border-t-2 border-neutral w-full h-20 flex justify-between items-center px-4 shadow-md">
      <ul className="flex items-center justify-between w-full">
        {NAVIGATIONS.map((navigation) => (
          <li key={navigation.path}>
            <Link
              to={navigation.path}
              className="group flex flex-col items-center justify-center py-2 px-4 text-neutral hover:text-accent"
            >
              <span className="group-hover:bg-accent text-neutral px-3 py-1 rounded-full transition-colors duration-300 ease-in-out">
                {navigation.icon}
              </span>
              <span className="text-xs md:text-sm">{navigation.title}</span>
            </Link>
          </li>
        ))}
        <li key="username">
          <Link
            to="/user"
            className="group flex flex-col items-center justify-center py-2 px-4 text-neutral hover:text-accent"
          >
            <span className="group-hover:bg-accent text-neutral px-3 py-1 rounded-full transition-colors duration-300 ease-in-out">
              {userInfo?.userProfilePicture ? (
                <img
                  src={userInfo.userProfilePicture}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full" 
                />
              ) : (
                <CircleUserRound className="w-8 h-8" />
              )}
            </span>
            <span className="text-xs md:text-sm">
              {userInfo ? userInfo.userName : "User"}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
