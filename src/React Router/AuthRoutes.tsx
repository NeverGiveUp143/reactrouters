import { Route, Routes } from 'react-router-dom';
import { Home } from '../Components/Home';
import { Login } from '../Components/Login';
import { Products } from '../Components/Products';

export const AuthRoutes = ()  => {
  return (
      <Routes>
        <Route element = {<Login/>} >
           <Route path = '/' element = {<Home />} />         
           <Route path = '/products' element = {<Products />} />         
        </Route>
        <Route element = {<Login/>} path ='/Login'/>
      </Routes>
  );
}

export default AuthRoutes;
