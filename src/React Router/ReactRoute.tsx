import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import About from '../Components/About';
import Home from '../Components/Home';
import Privacy from '../Components/Privacy';
import {Link} from  'react-router-dom'
import Books from '../Components/Books';

export const ReactRoute = () => {
  return (
    <>
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
      <Route path='/Books' element = {<Books />}></Route>
      <Route path='/Books/:bookName' element = {<Books />}></Route>
    </Routes> 
    </>
  );
}

