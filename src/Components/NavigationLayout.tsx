import { useContext } from "react";
import { Link } from "react-router-dom";
import { UseAuth } from "./AuthenticationProvider";

export const NavigationLayout = () => {

  const {updateFunction , token} = useContext(UseAuth) 

  const handleLogOut = () => {
    updateFunction('',false);
  }

  return (
    <>
      <nav>
          <ul>
            <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/Products'>Products</Link></li>           
          </ul>
      </nav>
      <div>
         {token ? <button onClick={handleLogOut} >Log out</button> : null}
      </div>
    </>
  );
}

