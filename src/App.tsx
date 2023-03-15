import './App.css';
import { AuthenticationProvider } from './Components/AuthenticationProvider';
import { AuthRoutes } from './React Router/AuthRoutes';


function App() {
  return (
   <>
     <AuthenticationProvider>
        <AuthRoutes />
     </AuthenticationProvider>
   </>
  );
}

export default App;
