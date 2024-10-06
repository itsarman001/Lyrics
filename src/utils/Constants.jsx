import { House, Compass, SquareLibrary } from 'lucide-react';

export const reducerCases = {
    SET_TOKEN: "SET TOKEN",
    SET_USER: "SET_USER",
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
