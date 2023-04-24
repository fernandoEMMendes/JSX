import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from '../components/Header'

import Home from './home'
import Favoritos from './favoritos'

function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Favoritos' element= {<Favoritos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas