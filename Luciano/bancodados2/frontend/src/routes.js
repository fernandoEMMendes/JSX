import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/header"

import Home from "./pages/Home/"
import CadastroClientes from "./pages/Clientes/CadastroClientes"
import CadastroProdutos from "./pages/Produtos/CadastroProdutos"
import CadastroUsuario from "./pages/Usuarios/CadastroUsuario"
import LoginUsuario from "./pages/LoginUsuario"
import ListarClientes from "./pages/Clientes/ListarClientes"
import ListarProdutos from "./pages/Produtos/ListarProdutos"
import ListarUsuarios from "./pages/Usuarios/ListarUsuario"
import AlterarUsuario from "./pages/Usuarios/AlterarUsuario"



export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/CadastroClientes" element={<CadastroClientes />} />
                <Route path="/CadastroProdutos" element={<CadastroProdutos />} />
                <Route path="/CadastroUsuario" element={<CadastroUsuario />} />
                <Route path="/LoginUsuario" element={<LoginUsuario />} />
                <Route path="/ListarClientes" element={<ListarClientes />} />
                <Route path="/ListarProdutos" element={<ListarProdutos />} />
                <Route path="/ListarUsuarios" element={<ListarUsuarios />} />
                <Route path="/AlterarUsuario" element={<AlterarUsuario />} />
            </Routes>
        </BrowserRouter>
    )
}