import { Home, User, Music, Search, SquareLibrary } from "lucide-react";

const navbarItems = [
  { name: "Home", icon: <Home />, path: "/" },
  { name: "Search", icon: <Search />, path: "/search" },
  { name: "Player", icon: <Music />, path: "/player" },
  { name: "Library", icon: <SquareLibrary />, path: "/library" },
  { name: "Profile", icon: <User />, path: "/profile" },
];

export default navbarItems;
