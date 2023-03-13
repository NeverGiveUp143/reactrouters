import { useRoutes } from "react-router-dom";
import Home from "../Components/Home";
import { NotFound } from "../Components/NotFound";

export const UseRoute = () => {

  const element = useRoutes([
    {
      path : "/",
      element : <Home/>
    },
    {
      path : "*",
      element : <NotFound />
    }
])

  return (
    <>
      <h2>Use Route hook</h2>
      {element}
    </>
  );
}

