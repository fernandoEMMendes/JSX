import Header from "./components/Header"

import Home from "./pages/Home"
import Pag2 from "./pages/Pag2"
import Pag3 from "./pages/Pag3"

import { BrowserRouter, Routes, Route } from "react-router-dom"


function Rotas() {
    return (
        <div>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pag2" element={<Pag2 />} />
                    <Route path="/pag3" element={<Pag3 />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Rotas