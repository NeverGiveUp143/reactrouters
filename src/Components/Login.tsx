import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import {UseAuth } from "./AuthProvider";


export const Login = () => {

  const auth =  useContext(UseAuth);

  return (
    <>
    <h2>Login</h2>
   
      {auth.token ? <Outlet /> : <Navigate to = '/Login' replace />}
    
    </>
  );
}

