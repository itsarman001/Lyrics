import React from "react";
import { Play } from "lucide-react";

const Card = ({ name, description, image, total_tracks, artists, onClick }) => {
  const fallbackImage = "https://via.placeholder.com/150"; // Use a fallback image if none is provided
  
  return (
    <div
      className="group relative bg-secondary hover:bg-secondaryHover rounded-lg shadow-md p-4 w-48 transform transition-all hover:scale-105"
      onClick={onClick} // Add the onClick handler here
    >
      {/* Image and Play Button Container */}
      <div className="relative overflow-hidden rounded-md">
        <img
          className="w-full h-40 object-cover mb-4 transition-transform duration-300 group-hover:scale-110"
          src={image || fallbackImage} // Use fallback if image is undefined
          alt={name}
        />

        {/* Play Button (visible on hover) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div>
            <button className="bg-accent p-3 rounded-full group-hover:bg-gradient-to-r group-hover:from-accentHover group-hover:to-accent transition duration-300 transform group-hover:scale-110 shadow-md group-hover:shadow-lg">
              <Play className="text-primary group-hover:text-primaryHover transition duration-300 transform group-hover:rotate-45" />
            </button>
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div>
        <h3 className="text-light text-base font-semibold truncate">{name}</h3>
        {artists && (
          <p className="text-accent text-xs mt-1 truncate">
            {artists.join(", ")}
          </p>
        )}
        <p className="text-light text-xs mt-2">Tracks: {total_tracks}</p>
      </div>
    </div>
  );
};

export default Card;
