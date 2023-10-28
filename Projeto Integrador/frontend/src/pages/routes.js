import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "../components/Header"

import Home from "./home"
import Login from "./Login"

export default function Rotas() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}