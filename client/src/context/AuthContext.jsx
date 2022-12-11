import { createContext, useState } from "react";

export const AContext = createContext();

export const AuthContext = ({children}) => {
  const [token, setToken] = useState("");

  return (
    <AContext.Provider value={{ token, setToken }}>
      { children }
    </AContext.Provider>
  );
};
