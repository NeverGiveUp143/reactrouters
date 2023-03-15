import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UseAuth } from '../Components/AuthenticationProvider';

export const PrivateRoute = () => {
debugger;
  const {token} = useContext(UseAuth);

  return (
    <>
      { token ? <Outlet /> : <Navigate to = '/Login' replace/>}
    </>
  );
}

export default PrivateRoute;
