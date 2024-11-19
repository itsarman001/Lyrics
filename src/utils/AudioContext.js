import { createContext, useContext, useState, useRef, } from "react";

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const audioRef = useRef(new Audio());

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        setCurrentTrack,
        isPlaying,
        setIsPlaying,
        volume,
        setVolume,
        audioRef,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioProvider = () => useContext(AudioContext);
