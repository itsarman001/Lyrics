import React from "react";
import { useStateProvider } from "../utils/StateProvider";
import { Card } from "./index";
import useFetchPlaylist from "../hooks/useFetchPlaylist";

const Library = () => {
  const [{ selectedPlaylist }] = useStateProvider();
  useFetchPlaylist(); // Hook to fetch playlist data

  return (
    <div className="w-full h-full flex flex-col items-center justify-start bg-primary p-4 overflow-y-auto">
      {selectedPlaylist?.tracks?.map((playlist) => (
        <Card
          key={playlist.id}
          id={playlist.playlistId}
          name={playlist.playlistName}
          description={playlist.playlistDescription}
          posterSrc={playlist.posterSrc}
        />
      ))}
    </div>
  );
};

export default Library;
