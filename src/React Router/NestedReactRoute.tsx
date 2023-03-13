import { Link, Route, Routes } from "react-router-dom";
import About from "../Components/About";
import Books from "../Components/Books";
import Home from "../Components/Home";
import { NewBooks } from "../Components/NewBooks";
import { NotFound } from "../Components/NotFound";
import Privacy from "../Components/Privacy";


export const NestedReactRoute = () => {
  return (
    <>
      NestedReactRoute
        
      <nav>
        <ul>          
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/About'>About</Link></li>
        <li><Link to = '/Privacy'>Privacy</Link></li>
        <li><Link to = '/Books'>Books</Link></li>         
        </ul>
      </nav>
       <Routes>
       <Route path='/' element = {<Home />}></Route>
       <Route path='/About' element = {<About />}></Route>
       <Route path='/Privacy' element = {<Privacy />}></Route>
       <Route path = '/Books'>
        <Route index element = {<Books/>} />
        <Route path = ':bookName' element = {<Books/>}/>
        <Route path = 'new' element = {<NewBooks/>} />
        <Route path = '*' element = {<NotFound/>} />
       </Route>
       </Routes>
    </>
  );
}

