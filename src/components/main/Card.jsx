import React, { useState } from 'react';
import { CirclePlay } from 'lucide-react';

const Card = ({ card }) => {
  const { src, altText, title, subtitle } = card;

  const [isHovered, setIsHovered] = useState(false);

  const hoverCardHoverEffect = () => setIsHovered((prevState) => !prevState);

  return (
    <div
      className="flex flex-col gap-4 my-4 p-2 rounded-lg bg-secondary relative min-w-24"
      onMouseEnter={hoverCardHoverEffect}
      onMouseLeave={hoverCardHoverEffect}
    >
      <div className="relative overflow-hidden">
        <img className="rounded-lg w-full " src={src} alt={altText} />
        <div
          className={`absolute bg-primary p-1 rounded-full ${
            isHovered
              ? 'bottom-[5%] right-[5%] transition-all duration-300 ease-in-out'
              : '-bottom-full right-[5%]'
          }`}
        >
          <CirclePlay size={35} color="#FF2E63" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-between text-text">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-base">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;