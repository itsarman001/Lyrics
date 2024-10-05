import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-2 mr-2 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;