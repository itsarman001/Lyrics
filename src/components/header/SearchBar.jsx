import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

const SearchBar = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex items-center justify-between gap-3 bg-primary border px-4 py-2 rounded md:w-4/5">
      <div className="text-text text-xl">{isTyping ? <FaArrowLeft /> : <IoIosSearch />}</div>
      <div className="w-full hidden md:block">
        <input
          type="text"
          placeholder="Search music, podcasts and more"
          className="px-2 py-1 w-full bg-transparent focus:outline-none text-text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="text-text text-xl hidden md:block">{isTyping ? <RxCrossCircled /> : null}</div>
    </div>
  );
};

export default SearchBar;
