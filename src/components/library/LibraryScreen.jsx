import React from "react";
import { Play } from "lucide-react";
import { Tracks } from "../index";

const LibraryScreen = ({
  id,
  name,
  description,
  artists,
  posterSrc,
  tracks,
}) => {
  const propId = id;
  return (
    <div className=" w-full h-full overflow-y-auto bg-primary p-5">
      <div className="flex items-center justify-center flex-col ">
        <img
          className="w-3/5 rounded-md object-cover md:w-2/5 lg:w-1/5"
          src={posterSrc}
          alt={name}
        />
        <div className="text-center">
          <h3 className="text-2xl my-2 font-bold text-white">{name}</h3>
          <p className="text-lg text-gray-300">{description}</p>
        </div>
        <div className="bg-green-400 hover:bg-green-500 p-4 rounded-full my-4 hover:scale-105 transition-all delay-300">
          <Play color="white" />
        </div>
      </div>
      <ul className=" w-full max-h-full ">
        {tracks.map((track) => (
          <li>
            <Tracks key={track.id} {...track} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LibraryScreen;
