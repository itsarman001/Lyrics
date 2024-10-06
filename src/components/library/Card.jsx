import React from "react";

const Card = ({ track }) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-4 flex items-center">
      <img
        className="w-16 h-16 rounded-md"
        src={track.album.images[0].url}
        alt={`${track.name} album cover`}
      />
      <div className="ml-4">
        <h2 className="text-xl font-bold text-white">{track.name}</h2>
        <p className="text-gray-400">
          {track.artists.map((artist) => artist.name).join(", ")}
        </p>
        <p className="text-gray-600">{track.album.name}</p>
      </div>
      <div className="ml-auto flex items-center">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-full">
          Play
        </button>
      </div>
    </div>
  );
};

export default Card;
