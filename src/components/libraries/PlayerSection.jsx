import React, { useEffect } from "react";
import axios from "axios";
import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constants";

const PlayerSection = () => {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();

  // Manage Volume
  const setVolume = async (e) => {
    await axios.put(
      "https://api.spotify.com/v1/me/player/volume",
      {},
      {
        params: {
          Volume_percent: parseInt(e.target.value),
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  // Manage Player State
  useEffect(()=>{
    const getCurrentTrack = async ()=> {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if(response.data !== "") {
        const currentlyPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };
        dispatch({type: reducerCases.SET_PLAYING, currentlyPlaying})
      } else {
        dispatch({type: reducerCases.SET_PLAYING, currentlyPlaying: null})
      }
    }
    getCurrentTrack()
  }, [token, dispatch])

  return (
    <section className="h-full flex items-center justify-between overflow-hidden bg-gray-700 px-4 py-2 text-white">
      <div className="flex h-full w-3/5 items-center gap-3 py-2">
        <img
          className="h-full object-cover"
          src="https://i.scdn.co/image/ab67706f0000000278c3ea7da56f79e29f208a02"
          alt="Music Info"
        />
        <div>
          <h4 className="text-base md:text-lg font-semibold">
            Hindi Hot Party Songs
          </h4>
          <p className="text-wrap text-sm">
            Hottest Hindi music that India is listening to. Cover - Stree 2
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="previous">
          <SkipBack className="w-6 h-6" />
        </div>
        <div className="playerState bg-white p-2 rounded-full">
          <Play className="w-6 h-6 text-black" />
        </div>
        <div className="next">
          <SkipForward className="w-6 h-6" />
        </div>
      </div>
      <div className="volume flex items-center gap-2">
        <Volume2 className="w-6 h-6" />
        <input
          className="hidden md:block"
          type="range"
          name="volume"
          onMouseUp={(e) => setVolume(e)}
          min={0}
          max={100}
        />
      </div>
    </section>
  );
};

export default PlayerSection;
