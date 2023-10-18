import Rotas from "./pages/router"
import AuthProvider from "./Contexts/AuthContext"
import "./App.scss"
import { ToastContainer } from "react-toastify"

export default function App() {

  return (
    <AuthProvider>
      <div>
        <Rotas />
        <ToastContainer
          autoClose={5000}
        />
      </div>
    </AuthProvider>
  )

}