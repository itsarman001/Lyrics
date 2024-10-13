import React from "react";
import { Play } from "lucide-react";

const Card = ({id, name, description, posterSrc}) => {
  return (
    <div key={id} className=" group flex items-center flex-col p-2 bg-primary hover:bg-secondary transition-colors text-white rounded-md max-w-40 relative">
      <div className="relative overflow-hidden">
      <img
        src={posterSrc}
        alt={name}
        className="w-full"
      />
      <div className="w-10 h-10 p-2 bg-green-400 rounded-full flex items-center justify-center absolute -bottom-[50%] right-2 group-hover:bottom-4 delay-300">
        <Play />
      </div>
      </div>
      <div className="w-full">
        <h4 className="text-base">{name}</h4>
        <p className="text-xs text-gray-300">{description}</p>
      </div>
      
    </div>
  );
};

export default Card;
