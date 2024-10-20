import React from "react";
import { Play, Heart } from "lucide-react";
import { Tracks } from "../";

const Library = ({ src, alt, title, subtitle, id }) => {
  return (
    <section className="h-full flex flex-col">
      <div className="flex items-start lg:flex-col gap-4 w-full p-4 flex-shrink-0">
        <div className="w-2/5 lg:w-1/5">
          <img className="w-full" src={src} alt={alt} />
        </div>
        <div className="w-3/5">
          <div className="lg:w-full mb-4">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold my-2">
              {title}
            </h3>
            <p className="text-xl my-2 text-gray-300">{subtitle}</p>
            <p className="text-base">{}</p>
          </div>

          
          {id && <div className="flex items-center gap-8">
            <div className="p-3 bg-red-500 hover:bg-red-600 rounded-full">
              <Heart />
            </div>
            <div className="p-3 bg-accent rounded-full">
              <Play />
            </div>
          </div>}
          
        </div>
      </div>

      {/* Vertical Scroll for Tracks */}
      <div className="p-4 flex-1 overflow-y-auto"> {/* Fill available space and enable scrolling */}
        <div className="flex flex-col space-y-4">
          
        </div>
      </div>
    </section>
  );
};

export default Library;
