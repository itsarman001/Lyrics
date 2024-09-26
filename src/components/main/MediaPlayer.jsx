import React, { useState } from "react";
import {
  CirclePlay,
  CirclePause,
  Volume2,
  VolumeOff,
  SkipBack,
  SkipForward,
  Heart,
} from "lucide-react";

const MediaPlayer = ({
  posterSrc,
  posterAlt,
  trackTitle,
  artists,
  ...rest
}) => {

    const [playerState, setPlayerState] = useState(false)
    const [volumeState, setVolumeState] = useState(false)

  const CONTROLLS = [
    {
      name: "Play Button",
      icon: <CirclePlay />,
    },
    {
      name: "Pause Button",
      icon: <CirclePause />,
    },
    {
      name: "Volume Up",
      icon: <Volume2 />,
    },
    {
      name: "Volume Off",
      icon: <VolumeOff />,
    },
    {
      name: "Skip Backward",
      icon: <SkipBack />,
    },
    {
      name: "Skip Forward",
      icon: <SkipForward />,
    },
    {
      name: "Heart",
      icon: <Heart />,
    },
  ];

  return (
    <section>
      {/* Render Poster */}
      <div>
        <img src={posterSrc} alt={posterAlt} />
      </div>
      {/* Controlls and Label */}
      <div>
        <div>
          <h4 className="text-xl font-semibold">{trackTitle}</h4>
          <p className="flex items-center gap-2">
            {artists.map((artist) => (
              <span className="text-base" key={artist.name}>
                {artist.name}
              </span>
            ))}
          </p>
        </div>

        {/* controlls */}
        <div>
            {}
        </div>
      </div>
    </section>
  );
};

export default MediaPlayer;
