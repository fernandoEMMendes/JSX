import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Login from '../Login'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}