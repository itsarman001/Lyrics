import React from "react";
import { CirclePlay } from "lucide-react";

const Card = ({ isRounded, src, alt, title, subtitle, id }) => {
  return (
    <div className="relative w-52 md:w-56 lg:w-60 h-auto p-2 md:p-3 lg:p-4 bg-secondary group transition-transform transform hover:scale-105 overflow-hidden">
      <div className="mb-3 relative">
        <img
          className={`${isRounded ? "rounded-full" : "rounded-sm"} w-full`}
          src={src}
          alt={alt}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <CirclePlay className="text-neutral h-12 w-12 transition-transform duration-300 group-hover:scale-125" />
        </div>
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold text-neutral text-nowrap text-ellipsis overflow-hidden w-full">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-300 text-nowrap text-ellipsis overflow-hidden w-4/5">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Card;
