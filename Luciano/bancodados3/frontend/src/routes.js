import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Inicio from './Inicio'
import Produtos from './Produtos'
import Clientes from './Clientes/CriarClientes'
import Login from './Login'
import CriarUsuarios from './Usuarios/CriarUsuarios'
import ListarUsuarios from './Usuarios/ListarUsuarios'

export default function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/Produtos' element={<Produtos />} />
                <Route path='/Clientes' element={<Clientes />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/CriarUsuarios' element={<CriarUsuarios />} />
                <Route path='/ListarUsuarios' element={<ListarUsuarios />} />
            </Routes>
        </BrowserRouter>
    )
}