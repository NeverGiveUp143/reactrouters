import { createContext } from "react";
import { AuthUser, childNode } from "../Type";


export const UseAuth = createContext<AuthUser>({token : false})

export const AuthProvider = ({children} : childNode) => {

  const auth = {token : false}

  return (
    <>
      <UseAuth.Provider value = {auth} >
        {children}
      </UseAuth.Provider>
    </>
  );
}
