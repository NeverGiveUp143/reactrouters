import { useParams } from 'react-router-dom';
import BooksList from './BooksList';
import { NewBooks } from './NewBooks';
//import { useLocation } from 'react-router-dom';

export const  Books = () => {
  const {bookName} = useParams();
  // const location = useLocation();
  // const name = location.pathname.split('/')[2];
  return (
    <>
    <h2>Books</h2> 
    <p>Selected book name : {bookName}</p> 
    <BooksList />
    <NewBooks />
    </>
  );
}

export default Books;
