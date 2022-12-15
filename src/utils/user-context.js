import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children, setIsLoggedIn }) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
