import React from "react";

const Tracks = ({ trackName, duration, previewUrl, artist }) => {
  return (
    <div>
      <div>
        <span>{trackName}</span> <span>{duration}</span>{" "}
        <button>{previewUrl}</button>
      </div>
      {artist && (
        <div>
          <span>{artist}</span>
        </div>
      )}
    </div>
  );
};

export default Tracks;
