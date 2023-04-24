import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from '../components/Header'
import Cadastro from '../components/cadastro'

import Home from './home'
import Info from './informacoes'


function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/informações' element= {<Info />} />
                <Route path='/Cadastro' element= {<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas