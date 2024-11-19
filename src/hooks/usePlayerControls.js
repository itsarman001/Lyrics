import { useAudioProvider } from "../utils/AudioContext";

const usePlayerControls = () => {
  const { audioRef, isPlaying, setIsPlaying, volume, setVolume } = useAudioProvider();

  const playPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const seekForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 5;
    }
  };

  const seekBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 5;
    }
  };

  const handleSeekBarChange = (e) => {
    if (audioRef.current) {
      audioRef.current.currentTime = e.target.value;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  return {
    playPause,
    seekForward,
    seekBackward,
    handleSeekBarChange,
    handleVolumeChange,
  };
};

export default usePlayerControls;
