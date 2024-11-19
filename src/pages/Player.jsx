import React, { useEffect, useState } from "react";
import { useFetchTrack } from "../hooks";
import { useAudioProvider } from "../utils/AudioContext";
import { useStateProvider } from "../utils/StateProvider";
import usePlayerControls from "../hooks/usePlayerControls";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

const Player = () => {
  const { setCurrentTrack, currentTrack, audioRef, isPlaying, setIsPlaying, volume } = useAudioProvider();
  const { currentTrackId } = useStateProvider();

  const [trackProgress, setTrackProgress] = useState(0); // For seekbar updates
  const { trackData, loading, error } = useFetchTrack(currentTrackId);

  const {
    playPause,
    seekForward,
    seekBackward,
    handleSeekBarChange,
    handleVolumeChange,
  } = usePlayerControls();

  // Update current track and set the audio source
  useEffect(() => {
    if (trackData) {
      setCurrentTrack(trackData);
      if (audioRef.current) {
        audioRef.current.src = trackData.track.preview_url;
        audioRef.current.addEventListener("timeupdate", updateProgress);
        audioRef.current.addEventListener("ended", handleTrackEnd);
      }
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
        audioRef.current.removeEventListener("ended", handleTrackEnd);
      }
    };
  }, [trackData, setCurrentTrack, audioRef]);

  // Handle track progress updates
  const updateProgress = () => {
    setTrackProgress(audioRef.current?.currentTime || 0);
  };

  // Handle track end
  const handleTrackEnd = () => {
    setIsPlaying(false); // Reset the play button state when the track ends
    setTrackProgress(0); // Reset progress
  };

  // Format time for seekbar
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (loading) return <div className="text-light">Loading...</div>;
  if (error) return <div className="text-light">{error}</div>;

  return (
    <div className="bg-primary text-light p-6 rounded-lg max-w-md mx-auto shadow-lg">
      {/* Track Info Section */}
      <div className="flex items-center space-x-4">
        <img
          src={trackData.album.images}
          alt={trackData.track.name}
          className="w-20 h-20 rounded shadow-md"
        />
        <div>
          <h2 className="text-accent font-bold text-lg">{trackData.track.name}</h2>
          <p className="text-secondary text-sm">{trackData.track.artists.join(", ")}</p>
          <p className="text-secondary text-xs">Album: {trackData.album.name}</p>
        </div>
      </div>

      {/* Seekbar */}
      <div className="mt-4">
        <input
          type="range"
          className="w-full accent-accentHover"
          min="0"
          max={audioRef.current?.duration || 100}
          value={trackProgress}
          onChange={handleSeekBarChange}
        />
        <div className="flex justify-between text-secondary text-sm mt-1">
          <span>{formatTime(trackProgress)}</span>
          <span>{formatTime(audioRef.current?.duration || 0)}</span>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-secondaryHover p-3 rounded-full hover:bg-secondary transition"
          onClick={seekBackward}
        >
          <SkipBack size={20} />
        </button>
        <button
          className="bg-accent p-3 rounded-full text-primary hover:bg-accentHover transition"
          onClick={playPause}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          className="bg-secondaryHover p-3 rounded-full hover:bg-secondary transition"
          onClick={seekForward}
        >
          <SkipForward size={20} />
        </button>
      </div>

      {/* Volume Controls */}
      <div className="flex items-center mt-4 space-x-4">
        <Volume2 className="text-secondary" size={20} />
        <input
          type="range"
          className="w-full accent-accentHover"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>

      {/* Queue Section */}
      <div className="mt-6 bg-hover p-4 rounded text-light shadow-md">
        <h4 className="font-bold text-sm mb-2">Queue (Work in Progress)</h4>
        <ul>
          <li className="text-secondary text-sm">Next/Previous Dummy</li>
        </ul>
      </div>
    </div>
  );
};

export default Player;
