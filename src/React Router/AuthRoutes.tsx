import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import { Login } from "../Components/Login";
import { NavigationLayout } from "../Components/NavigationLayout";
import Products from "../Components/Products";
import PrivateRoute from "./PrivateRoute";

export const AuthRoutes = ()  =>  {
  return (
    <>
    <NavigationLayout />
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Route>
      <Route index path='/Login' element={<Login />} />
    </Routes>
    </>
  );
}