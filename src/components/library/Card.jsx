import React, { useState } from 'react';

const Card = ({ artistName, imageSrc, isRounded }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-36 h-44 bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageSrc}
        alt={artistName}
        className={`w-full h-3/5 object-cover ${isRounded ? 'rounded-full' : 'rounded-none'} transition-all duration-300`}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/4 p-4 flex justify-between items-center">
        <div className="text-white">
          <p className="text-lg font-semibold">{artistName}</p>
          <p className="text-sm">Artist</p>
        </div>
        {isHovered && (
          <button className="bg-green-500 text-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-5.197-3.03A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;

