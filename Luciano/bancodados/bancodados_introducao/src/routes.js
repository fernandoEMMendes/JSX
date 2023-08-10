import Header from "./components/Header"

import Home from "./pages/Home"

import PagM from "./pages/PagM"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import PagV from "./pages/PagV"


function Rotas() {
    return (
        <div>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/pagm" element={<PagM />} />

                    <Route path="/pagv" element={<PagV />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Rotas