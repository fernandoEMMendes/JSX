import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import apiLocal from '../API/apiLocal/api'
import './Dashboard.scss'

export default function Dashboard() {
    const navigation = useNavigate()

    function handleSair() {
        localStorage.removeItem('@tklogin2023')
        navigation('/')
    }

    return (
        <main id='Main_Dashboard'>
            <header id='Header_Dashboard'>
                <h1>Dashboard</h1>
            </header>

            <section id='Sessao_Dashboard'>

            <Link className='Links_Dashboard' to='/Produtos'><p>Cadastrar Produtos</p></Link>
            <br />
            <Link className='Links_Dashboard' to="/PedidosListar"><p>Listar Pedidos Cozinha</p></Link>
            <br />
            <Link className='Links_Dashboard' to="/PedidosCriar"><p>Criar Pedidos Balcão</p></Link>
            <br />
            <button onClick={handleSair}>Sair</button>
            
            </section>
            <footer id='Footer_Dashboard'>
              
            </footer>
        </main>
    )
}