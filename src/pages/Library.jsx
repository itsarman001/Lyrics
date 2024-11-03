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
    sessionStorage.setItem('currentTrack', JSON.stringify(track)); // Save track to session storage
    navigate(`/player`); // Navigate to the player with the track ID
  };

  return (
    <section>
      <div>
        <img src={playlist.imageUrl} alt={playlist.name} />
        <h3 className="text-2xl font-semibold">{playlist.name}</h3>
        <p className="text-gray-500">{playlist.description}</p>
      </div>

      {/* Render Tracks */}
      <div className="mt-4">
        <h4 className="text-lg font-bold">Tracks:</h4>
        <ul className="space-y-2">
          {playlist.tracks.map(track => (
            <li key={track.id}>
              <Tracks
                title={track.name}
                subtitle={`${track.artist} - ${track.album}`}
                poster={track.previewUrl ? track.previewUrl : playlist.imageUrl}
                onClick={() => handleTrackClick(track)} // Pass entire track object
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Library;
