import { BrowserRouter, Routes, Route, } from "react-router-dom"

import Header from './components/Header';

import Home from "./pages/Home"
import QuemSomos from "./pages/QuemSomos"
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Servicos from "./pages/Servicos";


function Rotas() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/QuemSomos" element={<QuemSomos />} />
                    <Route path="/Produtos" element={<Produtos  />} />
                    <Route path="/Contato" element={<Contato />} />
                    <Route path="/servicos" element={<Servicos />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default Rotas