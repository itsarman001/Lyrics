import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function SearchBar() {
  const [isTyping, setIsTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 w-auto md:w-1/2">
      <div>{isTyping ? <FaArrowLeft /> : <CiSearch />}</div>
      <input
        className="outline-none hidden md:block w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search songs, album, artists, prodcast"
      />
      <div className="hidden md:block">{isTyping ? <RxCross2 /> : ""}</div>
    </div>
  );
}

export default SearchBar;
