import { Link, useNavigate } from "react-router-dom"
import './dono.scss'

export default function Donos() {

  const navigation = useNavigate()

  function handleCliente () {
    navigation("/Home")
  }

  function handleAdmin () {
    navigation("/Login")
  }

  return (
    <div>
      <div className="conteinerTitulo">
        <p>Você é :</p>
      </div>

      <div className="conteinerEscolha">
        <button onClick={handleCliente}>
          <Link>Clientes</Link>
        </button>

        <button onClick={handleAdmin}>
          <Link>Administrador</Link>
        </button>
      </div>
    </div>
  )
}