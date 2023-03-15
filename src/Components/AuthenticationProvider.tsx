import {createContext, useState } from "react";
import { AuthUser, childNode } from "../Type";


export const UseAuth = createContext<AuthUser>({email : '' ,updateFunction : () => {} ,token : false })

export const AuthenticationProvider = ({children} : childNode) => {
  const [token , setToken] = useState (false);
  const [email,setEmail] = useState('');

  const updateFunction = (email : string ,isValid :  boolean) => {
   setEmail(email);
   setToken(isValid);
  }
 
  const contextValue = {email,updateFunction , token}

  return (
    <>
      <UseAuth.Provider value={contextValue} >
       {children}
      </UseAuth.Provider>
    </>
  );
}

