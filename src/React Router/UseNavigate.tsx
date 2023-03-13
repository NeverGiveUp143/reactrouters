import { Link, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import { NotFound } from "../Components/NotFound";

export const UseNavigate = ()  =>{
  return (
    <>
    <nav>
      <ul>
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/About'>About</Link></li>
        <li><Link to = '/Privacy'>Privacy</Link></li>
      </ul>
      <Routes>
         <Route path = '/' element = {<Home/>}/>
         <Route path = '*' element = {<NotFound/>} />
      </Routes>
    </nav>
    </>
  );
}

export default UseNavigate;
