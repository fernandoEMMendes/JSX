import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import apiLocal from '../API/apiLocal/api'


export default function Dashboard() {
    const navigation = useNavigate()

    function handleSair() {
        localStorage.removeItem('@tklogin2023')
        navigation('/')
    }

    return (
        <div>
            <h1>Dashboard</h1>

            <Link to='/Produtos'>Cadastrar Produtos</Link>
            <br />
            <Link to="/PedidosListar">Listar Pedidos Cozinha</Link>
            <br />
            <Link to="/PedidosCriar">Criar Pedidos Balcão</Link>
            <br />
            <button onClick={handleSair}>Sair</button>
        </div>
    )
}