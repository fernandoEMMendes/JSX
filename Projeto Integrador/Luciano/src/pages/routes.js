import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from '../components/Header'
import Cadastro from '../components/cadastro'

import Home from './home'
import info from './informacoes'


function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/informações' element= {<info />} />
                <Route path='/Cadastro' element= {<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas