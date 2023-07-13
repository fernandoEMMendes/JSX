import { BrowserRouter, Routes, Route, } from "react-router-dom"

import RPGTeste from "./Pages/RPGTeste"


function Rotas() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RPGTeste />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default Rotas