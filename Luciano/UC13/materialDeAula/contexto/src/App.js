import RotasIndex from './Pages/Routes';
import { ToastContainer } from "react-toastify"
import './App.scss'

export default function App() {
  return (
    <div>
      <RotasIndex />
      <ToastContainer 
      autoClose={5000}
      />
    </div>
  );
}