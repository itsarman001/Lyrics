import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [searchQuerry, setSearchQuerry] = useState("");

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        className="px-4 py-2 rounded-full focus:outline-accent bg-secondary focus:bg-neutral focus:text-primary"
        placeholder="Search Music"
        onChange={(e) => setSearchQuerry(e.target.value)}
        value={searchQuerry}
      />
      <button className="p-2 bg-accent hover:bg-hover text-neutral rounded-full">
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;
