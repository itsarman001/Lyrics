import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Pause, Play, StepBack, StepForward, Volume2, VolumeOff } from "lucide-react";
import { useStateProvider } from "../../utils/StateProvider";
import { useAuthToken } from "../../hooks";

const PlayerBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { currentTrackId, setCurrentTrack, currentTrack } = useStateProvider();
  const { token } = useAuthToken();
  
  // Reference for the audio element
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchTrack = async () => {
      if (!currentTrackId || !token) return;
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/tracks/${currentTrackId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const selectedTrack = {
          trackId: response.data.id,
          trackName: response.data.name,
          previewUrl: response.data.preview_url,
          posterSrc: response.data.album.images[0]?.url,
          artists: response.data.artists.map((artist) => ({
            name: artist.name,
            url: artist.external_urls.spotify,
          })),
          duration: response.data.duration_ms,
          album: response.data.album.name,
          context_uri: response.data.album.uri,
          track_number: response.data.track_number,
        };
        setCurrentTrack(selectedTrack);
      } catch (error) {
        console.error("Error fetching track:", error);
      }
    };

    setIsPlaying(false)

    fetchTrack();
  }, [currentTrackId, token, setCurrentTrack]);

  // Play or pause the audio
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="bg-primary text-neutral border-t-2 border-neutral w-full h-20 flex justify-between items-center px-4 py-1 overflow-hidden shadow-md">
      <div className="flex items-center gap-4 py-2 px-1 w-3/5 overflow-hidden">
        {currentTrack && (
          <img
            className="w-12 h-12 object-cover rounded"
            src={currentTrack.posterSrc}
            alt={currentTrack.trackName}
          />
        )}
        <div>
          <h3 className="text-lg font-semibold text-ellipsis text-nowrap overflow-hidden">
            {currentTrack ? currentTrack.trackName : "Track Title"}
          </h3>
          <p className="text-sm text-nowrap w-[99%] text-ellipsis overflow-hidden">
            {currentTrack && currentTrack.artists.length > 0
              ? currentTrack.artists.map((artist) => artist.name).join(", ")
              : "Artist Name"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 px-3 py-2">
        <StepBack />
        <button
          className="p-3 bg-accent rounded-full"
          onClick={handlePlayPause}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <StepForward />
        {isMuted ? (
          <VolumeOff onClick={() => setIsMuted(false)} />
        ) : (
          <Volume2 onClick={() => setIsMuted(true)} />
        )}
      </div>

      {/* Audio element for playing the track */}
      {currentTrack && currentTrack.previewUrl && (
        <audio ref={audioRef} src={currentTrack.previewUrl} />
      )}
    </section>
  );
};

export default PlayerBar;
