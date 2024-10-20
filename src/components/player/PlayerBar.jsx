import React, { useState } from "react";
import {
  Pause,
  Play,
  StepBack,
  StepForward,
  Volume2,
  VolumeOff,
} from "lucide-react";

const PlayerBar = ({ src, alt, title, subtitle, id }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section className="bg-primary text-neutral border-t-2 border-neutral w-full h-20 flex justify-between items-center px-4 py-1 overflow-hidden shadow-md">
      <div className="flex items-center gap-4 py-2 px-1 w-3/5 overflow-hidden">
        {id && (
          <img className="w-12 h-12 object-cover rounded" src={src} alt={alt} />
        )}
        <div>
          <h3 className="text-lg font-semibold text-ellipsis text-nowrap overflow-hidden">
            {title}
          </h3>
          <p className="text-sm text-nowrap w-[99%] text-ellipsis overflow-hidden">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 px-3 py-2">
        <StepBack />
        <div className="p-3 bg-accent rounded-full">
          {isPlaying ? (
            <Pause onClick={() => setIsPlaying(false)} />
          ) : (
            <Play onClick={() => setIsPlaying(true)} />
          )}
        </div>
        <StepForward />
        {isMuted ? (
          <VolumeOff onClick={() => setIsMuted(false)} />
        ) : (
          <Volume2 onClick={() => setIsMuted(true)} />
        )}
      </div>
    </section>
  );
};

export default PlayerBar;
