import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/header"
import Home from "./pages/Home/"

//Cadastro
import CadastroClientes from "./pages/Clientes/CadastroClientes"
import CadastroProdutos from "./pages/Produtos/CadastroProdutos"
import CadastroUsuario from "./pages/Usuarios/CadastroUsuario"

//Login
import LoginUsuario from "./pages/Usuarios/LoginUsuario"

//Listar
import ListarClientes from "./pages/Clientes/ListarClientes"
import ListarProdutos from "./pages/Produtos/ListarProdutos"
import ListarUsuarios from "./pages/Usuarios/ListarUsuario"

//Alterar
import AlterarUsuario from "./pages/Usuarios/AlterarUsuario"
import AlterarProduto from "./pages/Produtos/AlterarProdutos"
import AlterarCliente from "./pages/Clientes/AlterarCliente"

//Dashboard
import Dashboard from "./pages/Dashboard"


export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/LoginUsuario" element={<LoginUsuario />} />
                <Route path="/Dashboard" element={<Dashboard />} />

                <Route path="/CadastroClientes" element={<CadastroClientes />} />
                <Route path="/CadastroProdutos" element={<CadastroProdutos />} />
                <Route path="/CadastroUsuario" element={<CadastroUsuario />} />

                <Route path="/ListarClientes" element={<ListarClientes />} />
                <Route path="/ListarProdutos" element={<ListarProdutos />} />
                <Route path="/ListarUsuarios" element={<ListarUsuarios />} />

                <Route path="/AlterarUsuario/:id" element={<AlterarUsuario />} />
                <Route path="/AlterarProdutos/:id" element={<AlterarProduto />} />
                <Route path="/AlterarCliente/:id" element={<AlterarCliente />} />
            </Routes>
        </BrowserRouter>
    )
}