import React from "react";
import { useStateProvider } from "../utils/StateProvider";
import { Card } from "./index";
import useFetchPlaylist from "../hooks/useFetchPlaylist";

const Library = () => {
  const [{ selectedPlaylist }] = useStateProvider();
  useFetchPlaylist(); // Hook to fetch playlist data

  return (
    <div className="w-full h-full flex flex-wrap items-center justify-start gap-4 bg-primary p-4 overflow-y-auto">
      
    </div>
  );
};

export default Library;
