// import React, { useEffect } from "react";
// import axios from "axios";
// import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
// import { useStateProvider } from "../../utils/StateProvider";
// import { reducerCases } from "../../utils/Constants";

// const PlayerSection = () => {
//   const [{ token, currentlyPlaying, playerState }, dispatch] =
//     useStateProvider();

//   // Manage Volume
//   const setVolume = async (e) => {
//     await axios.put(
//       "https://api.spotify.com/v1/me/player/volume",
//       {},
//       {
//         params: {
//           Volume_percent: parseInt(e.target.value),
//         },
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   };

//   // Manage Player State
//   const changeState = async () => {
//     const state = playerState ? "pause" : "play";
//     await axios.put(
//       `https://api.spotify.com/v1/me/player/${state}`,
//       {},
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + token,
//         },
//       }
//     );
//     dispatch({
//       type: reducerCases.SET_PLAYER_STATE,
//       playerState: !playerState,
//     });
//   };

//   const changeTrack = async (type) => {
//     await axios.post(
//       `https://api.spotify.com/v1/me/player/${type}`,
//       {},
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + token,
//         },
//       }
//     );
//     dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
//     const response1 = await axios.get(
//       "https://api.spotify.com/v1/me/player/currently-playing",
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + token,
//         },
//       }
//     );
//     if (response1.data !== "") {
//       const currentPlaying = {
//         id: response1.data.item.id,
//         name: response1.data.item.name,
//         artists: response1.data.item.artists.map((artist) => artist.name),
//         image: response1.data.item.album.images[2].url,
//       };
//       dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
//     } else {
//       dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
//     }
//   };

//   // Get Current Track
//   useEffect(() => {
//     const getCurrentTrack = async () => {
//       const response = await axios.get(
//         "https://api.spotify.com/v1/me/player/currently-playing",
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + token,
//           },
//         }
//       );
//       if (response.data !== "") {
//         console.log("Currently Playing Response " + response);
//         const currentlyPlaying = {
//           id: response.data.item.id,
//           name: response.data.item.name,
//           artists: response.data.item.artists.map((artist) => artist.name),
//           image: response.data.item.album.images[2].url,
//         };
//         dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
//       } else {
//         dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
//       }
//     };
//     getCurrentTrack();
//   }, [token, dispatch]);

//   return (
//     <section className="h-full flex items-center justify-between overflow-hidden bg-gray-700 px-4 py-2 text-white">
//       {/* Container for the currently playing track */}
//       <div className="flex h-full w-3/5 items-center gap-3 py-2">
//         {/* Current Track Image */}
//         <img
//           className="h-full object-cover"
//           src={currentlyPlaying?.image}
//           alt={currentlyPlaying?.name + " Poster"}
//         />
//         <div>
//           {/* Current track Name */}
//           <h4 className="text-base md:text-lg font-semibold">
//             {currentlyPlaying?.name}
//           </h4>
//           {/* Current Track Sub Details (artists) */}
//           <p className="text-wrap text-sm">
//             {currentlyPlaying?.artists.join(", ")}
//           </p>
//         </div>
//       </div>

//       {/* Controls for skipping and playing the track */}
//       <div className="flex items-center gap-3">
//         {/* Previous Track Button */}
//         <div className="previous">
//           <SkipBack
//             className="w-6 h-6"
//             onClick={() => changeTrack("previous")}
//           />
//         </div>
//         {/* Play/Pause Button */}
//         <div
//           className="playerState bg-white p-2 rounded-full"
//           onClick={changeState}
//         >
//           {playerState ? (
//             <Pause className="w-6 h-6 text-black" />
//           ) : (
//             <Play className="w-6 h-6 text-black" />
//           )}
//         </div>
//         {/* Next Track Button */}
//         <div className="next">
//           <SkipForward
//             className="w-6 h-6"
//             onClick={() => changeTrack("next")}
//           />
//         </div>
//       </div>

//       {/* Volume Control */}
//       <div className="volume flex items-center gap-2">
//         <Volume2 className="w-6 h-6" />
//         <input
//           className="hidden md:block"
//           type="range"
//           name="volume"
//           onMouseUp={(e) => setVolume(e)}
//           min={0}
//           max={100}
//         />
//       </div>
//     </section>
//   );
// };

// export default PlayerSection;

import React, { useEffect } from "react";
import axios from "axios";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useStateProvider } from "../../utils/StateProvider";
import { reducerCases } from "../../utils/Constants";

const PlayerSection = () => {
  const [{ token, currentlyPlaying, playerState }, dispatch] =
    useStateProvider();

  // Manage Volume
  const setVolume = async (e) => {
    try {
      await axios.put(
        "https://api.spotify.com/v1/me/player/volume",
        {},
        {
          params: { volume_percent: parseInt(e.target.value) }, // Fixed parameter name
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error setting volume:", error);
    }
  };

  // Manage Player State
  const changeState = async () => {
    try {
      const state = playerState ? "pause" : "play";
      await axios.put(
        `https://api.spotify.com/v1/me/player/${state}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: reducerCases.SET_PLAYER_STATE,
        playerState: !playerState,
      });
    } catch (error) {
      console.error("Error changing player state:", error);
    }
  };

  // Change Track
  const changeTrack = async (type) => {
    try {
      await axios.post(
        `https://api.spotify.com/v1/me/player/${type}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Ensure the player state is set to playing after changing the track
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });

      // Get the currently playing track
      const response1 = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response1.data !== "") {
        const currentPlaying = {
          id: response1.data.item.id,
          name: response1.data.item.name,
          artists: response1.data.item.artists.map((artist) => artist.name),
          image: response1.data.item.album.images[2]?.url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
      }
    } catch (error) {
      console.error("Error changing track:", error);
    }
  };

  // Get Current Track
  useEffect(() => {
    const getCurrentTrack = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data !== "") {
          console.log("Currently Playing Response:", response);
          const currentlyPlaying = {
            id: response.data.item.id,
            name: response.data.item.name,
            artists: response.data.item.artists.map((artist) => artist.name),
            image: response.data.item.album.images[2]?.url,
          };
          dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
        } else {
          dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
        }
      } catch (error) {
        console.error("Error fetching current track:", error);
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <section className="h-full flex items-center justify-between overflow-hidden bg-gray-700 px-4 py-2 text-white">
      {/* Container for the currently playing track */}
      <div className="flex h-full w-3/5 items-center gap-3 py-2">
        {/* Current Track Image */}
        
          <img
            className="h-full object-cover"
            src={currentlyPlaying?.image}
            alt={currentlyPlaying?.name + " Poster"}
          />
        
        <div>
          {/* Current track Name */}
          <h4 className="text-base md:text-lg font-semibold">
            {currentlyPlaying?.name}
          </h4>
          {/* Current Track Sub Details (artists) */}
          <p className="text-wrap text-sm">
            {currentlyPlaying?.artists.join(", ")}
          </p>
        </div>
      </div>

      {/* Controls for skipping and playing the track */}
      <div className="flex items-center gap-3">
        {/* Previous Track Button */}
        <div className="previous">
          <SkipBack
            className="w-6 h-6"
            onClick={() => changeTrack("previous")}
          />
        </div>
        {/* Play/Pause Button */}
        <div
          className="playerState bg-white p-2 rounded-full"
          onClick={changeState}
        >
          {playerState ? (
            <Pause className="w-6 h-6 text-black" />
          ) : (
            <Play className="w-6 h-6 text-black" />
          )}
        </div>
        {/* Next Track Button */}
        <div className="next">
          <SkipForward
            className="w-6 h-6"
            onClick={() => changeTrack("next")}
          />
        </div>
      </div>

      {/* Volume Control */}
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
