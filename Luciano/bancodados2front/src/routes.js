import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/header"

import Home from "./pages/Home/"
import CadastroClientes from "./pages/CadastroClientes"
import CadastroProdutos from "./pages/CadastroProdutos"
import CadastroUsuario from "./pages/CadastroUsuario"
import LoginUsuario from "./pages/LoginUsuario"
import ListarClientes from "./pages/ListarClientes"



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
            </Routes>
        </BrowserRouter>
    )
}