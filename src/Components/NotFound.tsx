// import { useState } from "react";
// import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


// export const NotFound = () => {

//   const [shouldNavigate , setShouldNavigate] = useState(false);

//   const handleReturn = () => {
//     setShouldNavigate(true);
//   }

//   return (
//     <>
//      Page Not Found
//      <br/>
//      <p>back to Home Page</p><br/>
//      <button onClick={handleReturn}>Return</button>
//      <br/>
//      {shouldNavigate ? <Navigate  to = "/"  replace /> : null}
//     </>
//   );
// }


export const NotFound = () => {
  const navigate = useNavigate();

  useEffect (() => {

   setTimeout (()=>{
    navigate('/',{replace : true})
   },1000)

  },[])

  return (
    <>
     Page Not Found
    </>
  );
}