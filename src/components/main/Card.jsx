import React, { useState } from "react";
import { CirclePlay } from "lucide-react";

const Card = ({ posterSrc, PosterAltText, artists, title, id, ...rest }) => {

  const [isHovered, setIsHovered] = useState(false);

  const hoverCardHoverEffect = () => setIsHovered((prevState) => !prevState);

  return (
    <div
      key={id}
      className="flex flex-col gap-4 my-4 p-2 rounded-lg bg-secondary relative min-w-24"
      onMouseEnter={hoverCardHoverEffect}
      onMouseLeave={hoverCardHoverEffect}
    >
      <div className="relative overflow-hidden">
        <img className="rounded-lg w-full " src={posterSrc} alt={PosterAltText} />
        <div
          className={`absolute bg-primary p-1 rounded-full ${
            isHovered
              ? "bottom-[5%] right-[5%] transition-all duration-300 ease-in-out"
              : "-bottom-full right-[5%]"
          }`}
        >
          <CirclePlay size={35} color="#FF2E63" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-between text-text">
        <h3 className="text-lg font-bold">{title}</h3>

        {/* Render Artists Name */}
        <div className="flex items-center gap-3 flex-wrap">
          {artists.map((artist) => (
            <p  key={artist.id} className="text-base">{artist.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
