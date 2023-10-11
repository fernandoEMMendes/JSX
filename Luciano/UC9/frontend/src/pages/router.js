import { BrowserRouter, Routes, Route } from "react-router-dom"


import Cadastro from "./Cadastro"
import Login from "./Login"

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}