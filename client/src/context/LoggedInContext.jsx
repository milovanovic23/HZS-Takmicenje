import { createContext, useState} from "react";

export const LIContext = createContext();

export const LoggedInContext = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LIContext.Provider value={{ loggedIn, setLoggedIn }}>
      { children }
    </LIContext.Provider>
  );
};
