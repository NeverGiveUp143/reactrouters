import {Link} from  'react-router-dom'

export const BooksList = () =>{

  const books = ['Black Clover','Demon Slayer','Fairy Tale']

  return (
    <>
     <h2>BooksList</h2> 
      {books.map((book,index)=> {
        return <div key={`${book}-${index}`} ><Link to = {`/Books/${book}`} >{book}</Link></div>
      })}
    </>
  );
}

export default BooksList;
