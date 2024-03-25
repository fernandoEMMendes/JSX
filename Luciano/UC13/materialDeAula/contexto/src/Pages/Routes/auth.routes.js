import { Route, Routes, BrowserRouter } from "react-router-dom"

import Dashboard from "../Dashboard"
import Produtos from "../Produtos"

export default function RotasAuth() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Produtos" element={<Produtos />} />
                <Route path="*" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}