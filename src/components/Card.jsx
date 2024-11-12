import React from 'react';
import { Play } from 'lucide-react';

const Card = ({ name, description, image, total_tracks, artists }) => {
  return (
    <div className="relative bg-secondary hover:bg-secondary-hover rounded-lg shadow-md p-4 w-48 transform transition-all hover:scale-105">
      {/* Image and Play Button Container */}
      <div className="relative">
        <img
          className="rounded-md w-full h-40 object-cover mb-4"
          src={image}
          alt={name}
        />
        
        {/* Play Button (visible on hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-md">
          <button className="p-2 bg-accent rounded-full hover:bg-accent-hover transform hover:scale-110 transition-all duration-200">
            <Play className="w-6 h-6 text-dark" />
          </button>
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
        <p className="text-gray-400 text-xs mt-2">Tracks: {total_tracks}</p>
      </div>
    </div>
  );
};

export default Card;
