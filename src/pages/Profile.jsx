import { useNavigate } from "react-router-dom";
import { useFetchUser, useFetchUserPlaylists } from "../hooks";
import Tracks from "../components/Tracks";
import { useStateProvider } from "../utils/StateProvider";

const Profile = () => {
  const navigate = useNavigate();
  const user = useFetchUser();
  const userPlaylists = useFetchUserPlaylists();
  const { setSelectedId, setSelectedIdType } = useStateProvider();

  const handlePlaylistClick = (id) => {
    setSelectedId(id);
    setSelectedIdType("playlist");
    navigate(`/library/${id}`); // Navigate with ID in the URL
  };

  return (
    <section className="h-full w-full flex items-center flex-col lg:flex-row lg:items-start lg:gap-8 py-4 px-4 lg:p-28 bg-base">
      <div>
        {/* User Info */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 mb-4">
            <img
              src={user.profile}
              alt={user.name}
              className="rounded-full w-full h-full object-cover shadow-lg"
            />
          </div>
          <h3 className="text-2xl font-semibold text-accent">
            {user.name}
          </h3>
          <p className="text-sm text-secondaryHover">
            {user.email}
          </p>
        </div>

        {/* Followers and Spotify Profile */}
        <div className="mt-6 flex flex-col items-center space-y-2">
          <h4 className="text-lg font-medium text-accentHover">
            Followers:{" "}
            <span className="font-light text-light">
              {user.followers === 0 ? "0" : user.followers}
            </span>
          </h4>
          <a
            href={user.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accentHover underline"
          >
            Spotify Profile
          </a>
        </div>
      </div>

      {/* User Playlists */}
      <div className="w-full p-4">
        <h2 className="text-left text-2xl mb-4 text-accent">
          Playlists
        </h2>
        <ul className="w-full h-96 overflow-y-auto p-4 rounded-lg bg-hover">
          {userPlaylists &&
            userPlaylists.map((playlist) => (
              <li
                key={playlist.id}
                className="mb-4 cursor-pointer p-2 rounded-lg"
                onClick={() => handlePlaylistClick(playlist.id)}
              >
                <Tracks
                  title={playlist.title}
                  subtitle={playlist.subtitle}
                  poster={playlist.poster}
                  id={playlist.id}
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
