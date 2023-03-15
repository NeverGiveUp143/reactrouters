import { useContext, useEffect, useState } from "react";
import { UseAuth } from "./AuthenticationProvider";




export const Login = () => {
  const {email,updateFunction , token } = useContext(UseAuth);
  const [emailId, setEmail] = useState(email);
  const [Error,setError] = useState('');

  useEffect(() => {
   setEmail(email);
  },[email])

  const handleClick = () => {
    const isValid = Validate();
    if(isValid)
    {    
       updateFunction(emailId,isValid);
    }
  }

  const Validate = () => {
    if(!( /^[\w-.]+@cognine[.\w]{2,4}/.test(emailId)))
    {
      setError('Please provide a Valid Email!');
      return false;
    }
    return true;
  }

  const handleChange =  (e : any) => {
   setError('');
   setEmail(e.target.value)
  }

  return (
    <>
     { !token ? (
      <>
        <h2>Log In</h2>
      <div>
        <div>
          <label>Email : </label>
          <input type='email' id ='email' value={emailId} onChange={e => {handleChange(e)}} />
          <div>{Error ? <span>{Error}</span> : null}</div>
        </div>
        <div>
          <button onClick = {handleClick} >Log In</button>
        </div>
      </div>
      </>
     ) : <p></p>}
    </>
  );
}

