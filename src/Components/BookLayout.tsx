import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const BookLayout = () =>
{
  const books = ['Black Clover','Demon Slayer','Fairy Tale']
  const newbooks = ['Death Note','One Piece','Dragon Ball Z']
  const [bookName , setBookName] = useState('Pokemon');
  return (
    <>
     <h2>BooksList</h2> 
      {books.map((book,index)=> {
        return <div key={`${book}-${index}`} ><Link to = {`/Books/${book}`} >{book}</Link></div>
      })}

     <h2>NewBooks</h2>
      {newbooks.map((book,index) => {
        return <div key = {index}><Link to = {`/Books/${book}`} >{book}</Link></div>
      })}
      
      <Link to = {`/Books/${bookName}`} >Book {bookName}</Link>
      <Outlet context={{authorName : "Venkatesh"}}/>
      <input type = 'text' value={bookName} onChange = {(e) => {setBookName(e.target.value)}} />
    </>
  );
}

export default BookLayout;
