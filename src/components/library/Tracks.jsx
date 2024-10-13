import React from "react";

const Tracks = ({
  id,
  name,
  artists,
  posterSrc,
  duration,
  album,
  context_uri,
  track_number,
}) => {
  return (
    <div
      key={id}
      className="flex items-center justify-between gap-2 p-2 bg-secondary rounded-md shadow-md m-2 w-full"
    >
      <img
        src={posterSrc}
        alt={name}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div className="w-3/5 flex items-center justify-between">
        <span className="flex flex-col items-start justify-between">
          <span className="text-sm font-bold flex items-center">{name}</span>
          <span className="text-xs text-gray-400">{artists.join(", ")}</span>
          <span className="text-xs text-gray-400">{album}</span>
        </span>
        <span className="text-xs text-gray-400">
          {(duration / 60000).toFixed(2)} min
        </span>
      </div>
      <div className="ml-auto text-xs text-gray-500">{context_uri}</div>
    </div>
  );
};

export default Tracks;
