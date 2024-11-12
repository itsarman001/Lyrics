import React, { useContext, useEffect, useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { AudioContext } from '../utils/AudioContext';  
import { useStateProvider } from '../utils/stateProvider';

const Player = () => {
  const { currentTrack: stateCurrentTrack } = useStateProvider();
  const { currentTrack, setCurrentTrack, isPlaying, handlePlayPause, volume, increaseVolume, decreaseVolume, handleVolumeChange } = useContext(AudioContext);
  const [trackData, setTrackData] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (stateCurrentTrack) {
      setCurrentTrack(stateCurrentTrack);
    } else {
      const storedTrack = sessionStorage.getItem('currentTrack');
      if (storedTrack) {
        setTrackData(JSON.parse(storedTrack));
      }
    }
  }, [stateCurrentTrack, setCurrentTrack]);

  useEffect(() => {
    if (currentTrack) {
      setTrackData(currentTrack);
    }
  }, [currentTrack]);

  useEffect(() => {
    // Function to handle play on user interaction
    const handleUserInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(error => {
          console.error('Playback failed:', error);
        });
      }
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  const handleVolumeSliderChange = (e) => {
    handleVolumeChange(parseFloat(e.target.value));
  };

  if (!trackData) return <div className="text-center mt-8">No track selected.</div>;

  return (
    <div className="flex flex-col items-center p-4 h-full w-full text-white rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-center">{trackData.name}</h2>
      <p className="text-gray-400 text-center">{trackData.artist} - {trackData.album}</p>
      <img
        src={trackData.poster || trackData.previewImg}
        alt={trackData.name}
        className="mt-4 w-64 h-64 object-cover rounded-sm sm:w-3/4 md:w-1/2"
      />

      <audio ref={audioRef} src={trackData.audioUrl} />

      <div className="flex items-center justify-between my-2 space-x-4">
        <button onClick={handlePlayPause} className="p-2 rounded-full bg-blue-500 hover:bg-blue-600">
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <div className="flex items-center p-4 space-x-4">
          <VolumeX size={24} onClick={decreaseVolume} />
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={volume} 
            onChange={handleVolumeSliderChange}
            className="w-full"
          />
          <Volume2 size={24} onClick={increaseVolume} />
        </div>
      </div>
    </div>
  );
};

export default Player;
