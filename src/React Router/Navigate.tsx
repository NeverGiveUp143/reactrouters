import { NavLink, Route, Routes } from "react-router-dom";
import About from "../Components/About";
import Home from "../Components/Home";
import { NotFound } from "../Components/NotFound";
import "../Styles/style.css"

export const NavigateComponent = () => {
  return (
    <>
      <h2>Navigate</h2>
      <nav>
      <ul>
        <li><NavLink to = '/' style={ ({isActive}) => { return isActive ? {color : 'red'} : {} } } >{ ({isActive}) => {
          return isActive ? 'Active Home' : 'Home'
        }  }</NavLink></li>
        <li><NavLink to = '/About'>About</NavLink></li>
        <li><NavLink to = '/Privacy'>Privacy</NavLink></li>
      </ul>
      <Routes>
         <Route path = '/' element = {<Home/>}/>
         <Route path = '/About' element = {<About/>}/>
         <Route path = '*' element = {<NotFound/>} />
      </Routes>
    </nav>
    </>
  );
}

