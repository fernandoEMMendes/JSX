import { BrowserRouter, Routes, Route } from "react-router-dom"


import Cadastro from "./Cadastro"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Produtos from "./Produtos"

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Produtos" element={<Produtos />} />
            </Routes>
        </BrowserRouter>
    )
}