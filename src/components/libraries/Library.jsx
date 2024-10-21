import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPlaylist } from "../../hooks";
import { Play, Heart } from "lucide-react";
import { Tracks } from "../";

const Library = () => {
  const { id } = useParams();
  const playlistData = useFetchPlaylist(id);

  if (!playlistData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="h-full flex flex-col lg:flex-row overflow-hidden">
      {/* Playlist Details */}
      <div className="w-full lg:w-2/5 p-4 flex-shrink-0 overflow-y-auto">
        <div className="flex flex-col lg:flex-row items-start gap-4">
          <img
            className="w-24 h-24 lg:w-1/3 lg:h-auto rounded-md"
            src={playlistData.posterSrc}
            alt={playlistData.playlistName}
          />
          <div className="flex flex-col justify-between w-full lg:w-2/3">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold my-2">
                {playlistData.playlistName}
              </h3>
              <p className="text-base my-2 text-gray-300">
                {playlistData.playlistDescription}
              </p>
              <p className="text-base">Tracks {playlistData.tracks.length}</p>
            </div>
            {id && (
              <div className="flex items-center gap-4 mt-4">
                <div className="p-2 bg-red-500 hover:bg-red-600 rounded-full">
                  <Heart />
                </div>
                <div className="p-2 bg-accent rounded-full">
                  <Play />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tracks List */}
      <ul className="w-full lg:w-3/5 p-4 flex-1 overflow-y-auto">
        {playlistData.tracks.map((track, index) => (
          <li key={track.id} className="flex flex-col space-y-4">
            <Tracks
              src={track.posterSrc}
              alt={track.name}
              title={track.name}
              subtitle={track.artists.join(", ")}
              index={index + 1}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Library;
