import { createContext, useContext, useState, useRef, useEffect } from "react";

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // Ref to manage the HTMLAudioElement instance
  const audioRef = useRef(new Audio());

  // Load initial audio state from session storage
  useEffect(() => {
    const storedTrack = sessionStorage.getItem("currentTrack");
    const storedPlaying = sessionStorage.getItem("isPlaying") === "true";
    const storedVolume = parseFloat(sessionStorage.getItem("volume")) || 0.5;

    // Restore previously playing track, volume, and play state
    if (storedTrack) {
      const parsedTrack = JSON.parse(storedTrack);
      setCurrentTrack(parsedTrack);
      audioRef.current.src = parsedTrack.previewUrl;
    }
    setIsPlaying(storedPlaying);
    setVolume(storedVolume);
    audioRef.current.volume = storedVolume;

    // Auto-play if a track was playing before refresh
    if (storedPlaying && storedTrack) {
      audioRef.current.play();
    }
  }, []);

  useEffect(() => {
    if (currentTrack) {
      audioRef.current.src = currentTrack.previewUrl;
      sessionStorage.setItem("currentTrack", JSON.stringify(currentTrack));
    }
  }, [currentTrack]);

  useEffect(() => {
    sessionStorage.setItem("isPlaying", isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    sessionStorage.setItem("volume", volume);
    audioRef.current.volume = volume;
  }, [volume]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const increaseVolume = () =>
    setVolume((prevVolume) => Math.min(prevVolume + 0.1, 1));
  const decreaseVolume = () =>
    setVolume((prevVolume) => Math.max(prevVolume - 0.1, 0));
  const handleVolumeChange = (value) => setVolume(value);

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        setCurrentTrack,
        isPlaying,
        handlePlayPause,
        volume,
        increaseVolume,
        decreaseVolume,
        handleVolumeChange,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioProvider = () => useContext(AudioContext);
