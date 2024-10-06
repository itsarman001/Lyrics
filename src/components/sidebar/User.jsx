import React, { useContext } from "react";
import { MoreVertical } from "lucide-react";
import SidebarContext from "./SidebarContext";
import { useStateProvider } from "../../utils/StateProvider";

const User = () => {
  const { expanded } = useContext(SidebarContext);
  const [{ userInfo }] = useStateProvider();

  return (
    <div key={userInfo?.id} className="border-t flex p-3 text-text">
      <img
        src={userInfo?.userProfilePicture}
        alt={userInfo?.userName}
        className="w-10 h-10 rounded-md"
      />
      <div
        className={`flex justify-between items-center overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        <div className="leading-4">
          <h3 className="font-semibold">{userInfo?.userName}</h3>
          <span className="text-xs text-gray-400">{userInfo?.email}</span>
        </div>
        <MoreVertical size={24} />
      </div>
    </div>
  );
};

export default User;
