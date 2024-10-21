import React from "react";
import { Card } from "./";
import { useGetFeaturedPlaylist } from "../hooks";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const featuredPlaylist = useGetFeaturedPlaylist(20);
  const navigate = useNavigate();

  // Update handleCardClick to accept an id parameter
  const handleCardClick = (id) => {
    navigate(`/library/${id}`); // Redirects to /library with the playlist ID
  };

  return (
    <section className="h-full w-full overflow-y-auto flex items-center flex-wrap">
      {featuredPlaylist?.playlists.map((playlist) => (
        <li key={playlist.id} onClick={() => handleCardClick(playlist.id)}>
          <Card
            isRounded={false}
            src={playlist.poster}
            alt={playlist.title}
            title={playlist.title}
            subtitle={playlist.subtitle}
          />
        </li>
      ))}
    </section>
  );
};

export default Home;
