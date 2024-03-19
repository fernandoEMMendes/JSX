import { Route, Routes, BrowserRouter } from "react-router-dom"

import Dashboard from "../Dashboard"

export default function RotasAuth() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}