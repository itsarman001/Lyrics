import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStateProvider } from '../utils/stateProvider';
import { useFetchPlaylist } from '../hooks';
import Tracks from '../components/Tracks';

const Library = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setActivePlaylistId, setCurrentTrack } = useStateProvider();
  const playlist = useFetchPlaylist(); // Fetch playlist data based on activePlaylistId

  useEffect(() => {
    if (id) {
      setActivePlaylistId(id);
      sessionStorage.setItem('activePlaylistId', id);
    } else {
      const storedPlaylistId = sessionStorage.getItem('activePlaylistId');
      if (storedPlaylistId) {
        setActivePlaylistId(storedPlaylistId);
      }
    }
  }, [id, setActivePlaylistId]);

  if (!playlist) return <div className="text-center mt-8">Loading...</div>;
  if (!playlist.id) return <div className="text-center mt-8">No playlist selected.</div>;

  const handleTrackClick = (track) => {
    setCurrentTrack(track); // Save track to context
    sessionStorage.setItem('currentTrack', JSON.stringify(track));
    navigate(`/player`); // Navigate to the player with the track ID
  };

  return (
    <section className="p-4 lg:p-8">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={playlist.imageUrl}
          alt={playlist.name}
          className="w-32 h-32 object-cover rounded-lg shadow-md"
        />
        <div>
          <h3 className="text-2xl font-semibold text-white">{playlist.name}</h3>
          <p className="text-gray-400 mt-1">{playlist.description}</p>
        </div>
      </div>

      {/* Render Tracks */}
      <div className="mt-6">
        <h4 className="text-lg font-bold text-white mb-3">Tracks:</h4>
        <ul className="space-y-4">
          {playlist.tracks.map((track) => (
            <li key={track.id} className=" p-3 rounded-md shadow hover:bg-secondary-dark transition">
              <Tracks
                title={track.name}
                subtitle={`${track.artist} - ${track.album}`}
                poster={track.previewImg || playlist.imageUrl} // Fix: Use fallback image if previewImg is unavailable
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
