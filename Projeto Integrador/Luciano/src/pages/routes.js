import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from '../components/Header'

import Home from './home'
import Favoritos from './favoritos'
import Info from './info'

function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Favoritos' element= {<Favoritos />} />
                <Route path='/informacoes/:id' element= {<Info />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas