import './App.css';
import { AuthProvider } from './Components/AuthProvider';
import AuthRoutes from './React Router/AuthRoutes';


function App() {
  return (
   <>
   <AuthProvider>
        <AuthRoutes />
   </AuthProvider>
   </>
  );
}

export default App;
