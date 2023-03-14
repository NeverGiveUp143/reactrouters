import { Link, Routes, Route } from "react-router-dom";
import About from "../Components/About";
import BookLayout from "../Components/BookLayout";
import Books from "../Components/Books";
import { EmployeeRoute } from "../Components/EmployeeRoute";
import Home from "../Components/Home";
import { NewBooks } from "../Components/NewBooks";
import { NotFound } from "../Components/NotFound";
import Privacy from "../Components/Privacy";

export const NestedReactOutlet = () => {
  return (
    <>
      NestedReactOutlet 
      <nav>
        <ul>          
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/About'>About</Link></li>
        <li><Link to = '/Privacy'>Privacy</Link></li>
        <li><Link to = '/Books'>Books</Link></li>         
        <li><Link to = '/Employees'>Employees</Link></li>         
        </ul>
      </nav>
       <Routes>
       <Route element = {<BookLayout/>}>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/About' element = {<About />}></Route>
        <Route path='/Privacy' element = {<Privacy />}></Route>
       </Route>
       <Route path = '/Books' element = {<BookLayout/>}>
        <Route index  element = {<Books/>}/>
        <Route path = ':bookName' element = {<Books/>}/>
        <Route path = 'new' element = {<NewBooks/>} />
       </Route>
       <Route path = '/Employees/*' element = {<EmployeeRoute/>}/>
       <Route path = '*' element = {<NotFound/>} />
       </Routes>
    </>
  );
}

export default NestedReactOutlet;
