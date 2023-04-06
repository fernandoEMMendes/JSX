import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import Home from "./home"
import QuemSomos from "./quemsomos"
import Loja from '../pages/loja'
import Footer from '../components/Footer'
import Contato from "../pages/contato"

function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/QuemSomos" element={<QuemSomos />} />
                <Route path='/Loja' element={<Loja />} />
                <Route path='/Contato' element={<Contato />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Rotas