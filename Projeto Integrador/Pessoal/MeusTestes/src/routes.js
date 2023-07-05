import { BrowserRouter, Routes, Route, } from "react-router-dom"

import Home from "./Pages/Home"


function Rotas() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default Rotas