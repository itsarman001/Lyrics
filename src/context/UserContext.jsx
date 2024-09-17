import React, { createContext, useContext } from 'react';
import { NAVIGATION_LINKS, CATEGORIES } from './Constants';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

  return (
    <UserContext.Provider value={{ NAVIGATION_LINKS, CATEGORIES }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
