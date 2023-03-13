import { Link } from "react-router-dom";


export const NewBooks = () =>{
  const books = ['Death Note','One Piece','Dragon Ball Z']
  return (
    <>
      <h2>NewBooks</h2>
      {books.map((book,index) => {
        return <div key = {index}><Link to = {`/Books/${book}`} >{book}</Link></div>
      })}
    </>
  );
}
