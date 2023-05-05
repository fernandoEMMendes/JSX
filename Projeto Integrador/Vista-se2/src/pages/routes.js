import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "../components/Header"
import Footer from '../components/Footer'

import Home from "./home"
import QuemSomos from "./quemsomos"
import Loja from '../pages/loja'
import Contato from "../pages/contato"
import Produtos from "./Produtos"

function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/QuemSomos" element={<QuemSomos />} />
                <Route path='/Loja' element={<Loja />} />
                <Route path='/Contato' element={<Contato />} />
                <Route path="/Produtos" element={<Produtos />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Rotas