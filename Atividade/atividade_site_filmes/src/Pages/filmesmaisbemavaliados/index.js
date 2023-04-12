import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../../Services/api"

import "../../Componentes/css/paginafilmes.css"

function FilmesMaisBemAvaliados() {

    const [Filmes, setFilmes] = useState([""])

    useEffect(() => {
        async function loadfilmes() {
            const responde = await api.get("/movie/top_rated", {
                params: {
                    api_key: "1c3a0bc2c4667ade8dc5844ddf1f3561",
                    language: "pt-BR"
                }
            })

            setFilmes(responde.data.results)

        }
        loadfilmes()
    }, [Filmes])



    return (
        <>
            <div>
                <h1>Filmes Mais Bem Avaliados</h1>
            </div>


            <div class="caixa">
                <div class="grid-container">
                    {Filmes.map((filme) => {
                        return (
                            <p key={filme.id}>
                                <b>{filme.title}</b> <br />
                                <div><img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt={filme.original_title} /> </div>
                                <Link to="/Detalhes"><h2>Detalhes</h2></Link> <br />
                            </p>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default FilmesMaisBemAvaliados