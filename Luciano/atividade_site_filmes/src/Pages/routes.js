import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "../Componentes/Header"
import Footer from "../Componentes/Footer"

import Comeco from "./comeco"

import FilmesCartaz from "./filmescartaz"
import FilmesMaisBemAvaliados from "./filmesmaisbemavaliados"
import FilmesPopulares from "./filmespopulares"

import SeriesMaisBemAvaliadas from "./seriesmaisbemavaliadas"
import SeriesNoAr from "./seriesnoar"
import SeriesPopulares from "./seriespopulares"

import Contato from "./contato"

import Detalhes from "./detalhes"
import Webseries from "./webseries"

import Favoritos from "./favoritos"

// ":id" quer dizer que o (id) estara sempre mudando por conta dos dois pontos ":"

function Rota() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Comeco />} />
                <Route path="/FilmesCartaz" element={<FilmesCartaz />} />
                <Route path="/FilmesMaisBemAvaliados" element={<FilmesMaisBemAvaliados />} />
                <Route path="/FilmesPopulares" element={<FilmesPopulares />} />
                <Route path="/SeriesMaisBemAvaliadas" element={<SeriesMaisBemAvaliadas />} />
                <Route path="/SeriesNoAr" element={<SeriesNoAr />} />
                <Route path="/SeriesPopulares" element={<SeriesPopulares />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Detalhes/:id" element={<Detalhes />} />
                <Route path="/Favoritos" element={<Favoritos />} />
                <Route path="/webseries" element={<Webseries />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}


export default Rota