
import { useLocation } from 'react-router-dom';

function Home() {
  const message = useLocation()
  return (
   <>
    <h1>
      Home
    </h1>
    <p>{message.state}</p>
   </>
  );
}

export default Home;
