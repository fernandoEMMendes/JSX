import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"

import Home from "./Home"
import RoupaCasual from "./RoupaCasual"
import RoupaFormal from "./RoupaFormal"

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/RF" element={<RoupaFormal />} />
                <Route path="/RC" element={<RoupaCasual />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}
