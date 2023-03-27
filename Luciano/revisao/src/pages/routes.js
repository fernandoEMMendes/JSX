import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Inicio from './inicio'
import Quemsomos from './quemsomos'
import Cadastro from '../components/cadastro'

function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/Quemsomos' element= {<Quemsomos />} />
                <Route path='/Cadastro' element= {<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas