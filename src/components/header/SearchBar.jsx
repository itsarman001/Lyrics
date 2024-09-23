import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { useUserContext } from "../../context/UserContext";

const SearchBar = () => {
  const [isTyping, setIsTyping] = useState(false);
  const { searchQuery, setSearchQuery } = useUserContext();

  const handleClearBtn = () => {
    setIsTyping(false);
    setSearchQuery("");
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };
  
  return (
    <div
      className={`flex items-center justify-between gap-3 ${
        isTyping
          ? "bg-text text-primary border-[1px]"
          : "bg-secondary text-text"
      }   px-4 py-2 rounded-full md:w-2/5 `}
    >
      <Search />
      <input
        type="text"
        placeholder="Search Music, Artists, Album, Prodcast..."
        className="w-full h-full transition bg-transparent border-none outline-none active:outline-none"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      {isTyping ? <X onClick={handleClearBtn} /> : ""}
    </div>
  );
};

export default SearchBar;
