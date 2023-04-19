import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import api from "../../Services/api"
import moment from 'moment'

import "../../Componentes/css/detalhes.css"

function Detalhes() {

    const { id } = useParams()
    const [filme, setfilme] = useState({})

    useEffect(() => {
        async function loaddetails() {
            const response = await api.get(`/movie/${id}`, {
                params: {
                    api_key: "1c3a0bc2c4667ade8dc5844ddf1f3561",
                    language: "pt-BR"
                }
            })

            setfilme(response.data)

        }
        loaddetails()
    }, [id])

    console.log(filme)

    function salvarfilmes() {
        const minhaLista = localStorage.getItem("@FilmesFavoritos")
        var FilmesSalvos = JSON.parse(minhaLista) || []

        const verificarFilmes = FilmesSalvos.some((FilmeSalvo) => FilmeSalvo.id === filme.id)
        if (verificarFilmes) {
            alert("Filme já está salvo!")
            return
        }

        FilmesSalvos.push(filme)
        localStorage.setItem("@FilmesFavoritos", JSON.stringify(FilmesSalvos))
        alert("Filme salvo!")
    }


    return (
        <>
            <div>

                <h1 className="h1detalhes">{filme.title}</h1> <br />
                <div><img className="imgdetalhes" src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt={filme.original_name} /></div> <br />
                <h3 className="h3detalhes">{filme.overview}</h3> <br /> <br />
                <h3 className="h3detalhes">Data de lançamento (Dia/Mês/Ano): {moment(new Date(`${filme.release_date}`)).format("DD-MM-YYYY")}</h3> <br />
                <h3 className="h3detalhes">Nota: {Number(`${filme.vote_average}`).toFixed(1)} </h3> <br />
                <button onClick={salvarfilmes}>Salvar Filme</button>
            </div>

            <div className="cadastroanuncio">
                <p>Gostaria de receber uma notificação de quando o filme entrar em cartaz? Faça sua conta e coloque em sua lista! <Link to="/contato" className="linkcadastro"><h3>Clique aqui e cadastre-se!</h3></Link></p>
                <Link to="/contato"><h3>.</h3></Link>
            </div>
        </>
    )
}

export default Detalhes