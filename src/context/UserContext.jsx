import { useContext, createContext } from "react";

const UserContext = () => createContext();

export const useUserContext = () => useContext(UserContext);

export const useUseContextProvider = ({ children }) => (
  <UserContext.provider value={{}}>{children}</UserContext.provider>
);
