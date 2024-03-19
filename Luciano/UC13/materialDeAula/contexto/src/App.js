import RotasIndex from './Pages/Routes';
import AuthProvider from './Contexts/AuthContext';
import { ToastContainer } from "react-toastify"
import './App.scss'

export default function App() {
  return (
    <div>
      <AuthProvider>
        <RotasIndex />
        <ToastContainer
          autoClose={5000}
          closeOnClick
        />
      </AuthProvider>
    </div>
  );
}