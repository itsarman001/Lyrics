import React, { createContext, useContext, useState } from "react";
import { NAVIGATION_LINKS, CATEGORIES } from "./Constants";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  return (
    <UserContext.Provider value={{ NAVIGATION_LINKS, CATEGORIES, searchQuery, setSearchQuery, searchResults, setSearchResults }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
