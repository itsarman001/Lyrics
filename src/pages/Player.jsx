import { useEffect, useState, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import { useStateProvider } from '../utils/stateProvider';

const Player = () => {
  const { currentTrack } = useStateProvider(); // Get track from context
  const [trackData, setTrackData] = useState(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (currentTrack) {
      setTrackData(currentTrack); // Use track from context
    } else {
      const storedTrack = sessionStorage.getItem('currentTrack');
      if (storedTrack) {
        setTrackData(JSON.parse(storedTrack)); // Use track from session storage
      }
    }
  }, [currentTrack]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    // Logic for next track can be added here
  };

  const handlePrevious = () => {
    // Logic for previous track can be added here
  };

  if (!trackData) return <div className="text-center mt-8">No track selected.</div>;

  return (
    <div className="flex flex-col items-center p-4 h-full w-full text-white rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-center">{trackData.name}</h2>
      <p className="text-gray-400 text-center">{trackData.artist} - {trackData.album}</p>
      <img
        src={trackData.poster || trackData.imageUrl}
        alt={trackData.name}
        className="mt-4 w-full h-64 object-cover rounded-lg sm:w-3/4 md:w-1/2"
      />
      <audio ref={audioRef} src={trackData.previewUrl} onEnded={() => setIsPlaying(false)} />

      <div className="flex items-center mt-4 space-x-4">
        <button onClick={handlePrevious} className="p-2 rounded-full hover:bg-gray-700">
          <SkipBack size={24} />
        </button>
        <button onClick={handlePlayPause} className="p-2 rounded-full bg-blue-500 hover:bg-blue-600">
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-700">
          <SkipForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default Player;
