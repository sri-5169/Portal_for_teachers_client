import React from "react";
import { createContext, useState } from "react";
export const LoginContext = createContext(null);
const ContextProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [isAuthenticated, setAuthentication] = useState(false);
  return (
    <LoginContext.Provider value={{ account, setAccount,isAuthenticated,setAuthentication}}>
      {children}
    </LoginContext.Provider>
  );
};
export default ContextProvider;
