import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import Home from "./home"
import QuemSomos from "./quemsomos"

function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/QuemSomos" element={<QuemSomos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas