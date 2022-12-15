import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children, setIsLoggedIn }) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
<<<<<<< HEAD
        setIsLoggedIn,
=======
        setIsLoggedIn
>>>>>>> 21d533290b25da176c800763a960c2b05a1daecc
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
