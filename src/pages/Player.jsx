import React, { useContext, useEffect, useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { AudioContext } from "../utils/AudioContext";
import useFetchTrack from "../hooks/useFetchTrack"; // Import the hook
import { useStateProvider } from "../utils/StateProvider";

const Player = () => {
  const { currentTrack: stateCurrentTrack } = useStateProvider();
  const {
    currentTrack,
    setCurrentTrack,
    isPlaying,
    handlePlayPause,
    volume,
    increaseVolume,
    decreaseVolume,
    handleVolumeChange,
  } = useContext(AudioContext);
  
  // Get track ID from the current state or props
  const trackId = stateCurrentTrack?.id;  // Assuming `stateCurrentTrack` contains the ID of the track
  const { trackData, loading, error } = useFetchTrack(trackId); // Fetch track data using the hook
  const audioRef = useRef(null);

  useEffect(() => {
    if (trackData) {
      setCurrentTrack(trackData);  // Set the fetched track as the current track
    }
  }, [trackData, setCurrentTrack]);

  useEffect(() => {
    if (currentTrack) {
      sessionStorage.setItem("currentTrack", JSON.stringify(currentTrack)); // Save the track data
    }
  }, [currentTrack]);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch((error) => {
          console.error("Playback failed:", error);
        });
      }
    };

    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  const handleVolumeSliderChange = (e) => {
    handleVolumeChange(parseFloat(e.target.value));
  };

  if (loading) return <div className="text-center text-light mt-8">Loading...</div>;
  if (error) return <div className="text-center text-light mt-8">{error}</div>;
  if (!trackData) return <div className="text-center text-light mt-8">No track selected.</div>;

  return (
    <div className="flex flex-col items-center p-6 w-full max-w-lg mx-auto bg-secondary rounded-lg shadow-md text-light">
      <h2 className="text-2xl font-bold text-accent">{trackData.name}</h2>
      <p className="text-sm text-light mt-1">{`${trackData.artist} - ${trackData.album}`}</p>

      <img
        src={trackData.poster || trackData.previewImg}
        alt={trackData.name}
        className="mt-4 w-64 h-64 object-cover rounded-md shadow-lg"
      />

      <audio ref={audioRef} src={trackData.audioUrl} />

      <div className="flex items-center justify-center my-4 space-x-4">
        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="p-3 bg-accent rounded-full hover:bg-gradient-to-r hover:from-accentHover hover:to-accent transition-all duration-300 transform hover:scale-110 shadow-md"
        >
          {isPlaying ? (
            <Pause className="text-primary hover:text-primaryHover transition-all" size={24} />
          ) : (
            <Play className="text-primary hover:text-primaryHover transition-all" size={24} />
          )}
        </button>
      </div>

      <div className="flex items-center w-full px-4 space-x-4 mt-4">
        <VolumeX
          size={24}
          className="text-secondaryHover cursor-pointer hover:text-light transition"
          onClick={decreaseVolume}
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeSliderChange}
          className="w-full accent-accent"
        />
        <Volume2
          size={24}
          className="text-secondaryHover cursor-pointer hover:text-light transition"
          onClick={increaseVolume}
        />
      </div>
    </div>
  );
};

export default Player;
