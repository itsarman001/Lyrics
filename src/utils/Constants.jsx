import { House, Compass, SquareLibrary } from 'lucide-react';

export const reducerCases = {
    SET_TOKEN: "SET_TOKEN",
    SET_USER: "SET_USER",
    SET_USER_PLAYLISTS: "SET_USER_PLAYLISTS",
    SET_PLAYLIST_ID: "SET_PLAYLIST_ID",
    SET_PLAYLIST: "SET_PLAYLIST",
    SET_PLAYING: "SET_PLAYING",
    SET_PLAYER_STATE: "SET_PLAYER_STATE"
}

export const NAVIGATIONS = [
    {
      icon: House,
      title: "Home",
      path: "/"
    },
    {
      icon: Compass,
      title: "Explore",
      path: "/explore"
    },
    {
      icon: SquareLibrary,
      title: "Library",
      path: "/library"
    },
  ];
