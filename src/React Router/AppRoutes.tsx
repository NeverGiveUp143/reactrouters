import { Route } from "react-router-dom";
import About from "../Components/About";
import { Contact } from "../Components/Contact";
import Home from "../Components/Home";

export const AppRoutes = () => {
  return (
    <>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/About' element = {<About/>} />
      <Route path = '/Contact' element = {<Contact/>} />
    </>
  );
}
