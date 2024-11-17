import { useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateProvider } from "../utils/StateProvider";
import { useFetchTracks } from "../hooks";
import Tracks from "../components/Tracks";

const Library = () => {
  const navigate = useNavigate();
  const { selectedId, selectedIdType } = useStateProvider();

  // Memoize context values to prevent unnecessary re-renders
  const memoizedSelectedId = useMemo(() => selectedId, [selectedId]);
  const memoizedSelectedIdType = useMemo(() => selectedIdType, [selectedIdType]);

  const { data: playlist, loading, error } = useFetchTracks(memoizedSelectedId, memoizedSelectedIdType);

  const handleTrackClick = (track) => {
    // Save track to context and session storage
    sessionStorage.setItem("currentTrack", JSON.stringify(track));
    navigate(`/player`);
  };

  if (loading) return <div>Loading...</div>;
  if (error || !playlist) return <div>Error loading data. Please try again later.</div>;

  return (
    <section className="p-4 lg:p-8 bg-base text-light">
      {/* Playlist Header */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6">
        <img
          src={playlist.image}
          alt={playlist.name}
          className="w-32 h-32 object-cover rounded-lg shadow-md mx-auto md:mx-0"
        />
        <div className="mt-4 md:mt-0 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-accent">{playlist.name}</h3>
          {playlist.additionalInfo?.description && (
            <p className="text-sm md:text-base text-secondaryHover mt-1">
              {playlist.additionalInfo.description}
            </p>
          )}
        </div>
      </div>

      {/* Track List */}
      <div className="mt-6">
        <h4 className="text-lg font-bold text-accent mb-3">Tracks:</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {playlist.additionalInfo?.tracks.map((track) => (
            <li
              key={track.id}
              className="p-3 rounded-md shadow-md transition duration-200"
            >
              <Tracks
                title={track.name}
                subtitle={`${track.artists?.join(", ")} - ${track.album}`}
                poster={track.image || playlist.image} // Fallback image
                onClick={() => handleTrackClick(track)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Library;
