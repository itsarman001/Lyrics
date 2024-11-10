import React, { createContext, useState, useRef, useEffect } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const storedTrack = sessionStorage.getItem('currentTrack');
    const storedPlaying = sessionStorage.getItem('isPlaying') === 'true';
    const storedVolume = parseFloat(sessionStorage.getItem('volume')) || 0.5;

    if (storedTrack) {
      setCurrentTrack(JSON.parse(storedTrack));
    }

    setIsPlaying(storedPlaying);
    setVolume(storedVolume);

    audioRef.current.volume = storedVolume;
    if (storedPlaying && storedTrack) {
      audioRef.current.src = JSON.parse(storedTrack).previewUrl;
      audioRef.current.play();
    }
  }, []);

  useEffect(() => {
    if (currentTrack) {
      audioRef.current.src = currentTrack.previewUrl;
      sessionStorage.setItem('currentTrack', JSON.stringify(currentTrack));
    }
  }, [currentTrack]);

  useEffect(() => {
    sessionStorage.setItem('isPlaying', isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    sessionStorage.setItem('volume', volume);
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

  const increaseVolume = () => setVolume((prevVolume) => Math.min(prevVolume + 0.1, 1));
  const decreaseVolume = () => setVolume((prevVolume) => Math.max(prevVolume - 0.1, 0));
  const handleVolumeChange = (value) => setVolume(value); // Add this line to handle volume change

  return (
    <AudioContext.Provider value={{ currentTrack, setCurrentTrack, isPlaying, handlePlayPause, increaseVolume, decreaseVolume, volume, handleVolumeChange }}>
      {children}
    </AudioContext.Provider>
  );
};
