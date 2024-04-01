import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Inicio from './Inicio'
import Dashboard from './Dashboard'
import Produtos from './Produtos'
import PedidosListar from './Pedidos/Listar'
import CriarPedidosBalcao from './Pedidos/Criar'
import Cozinha from './Cozinha'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/Produtos' element={<Produtos />} />
                <Route path='/PedidosListar' element={<PedidosListar />} />
                <Route path='/PedidosCriar' element={<CriarPedidosBalcao />} />
                <Route path='/Cozinha' element={<Cozinha />} />
            </Routes>
        </BrowserRouter>
    )
}