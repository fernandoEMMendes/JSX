import { useState } from "react"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import api from "../../Services/api.js"

import "../../Componentes/css/paginafilmes.css"

function FilmesPopulares() {

    const [Filmes, setFilmes] = useState([""])

    useEffect(() => {
        async function loadfilmes() {
            const response = await api.get("/movie/popular", {
                params: {
                    api_key: "1c3a0bc2c4667ade8dc5844ddf1f3561",
                    language: "pt-BR"
                }
            })

            setFilmes(response.data.results)

        }
        loadfilmes()
    }, [Filmes])

    console.log(Filmes)


    return (
        <>
            <div>
                <h1> Filmes Populares</h1>
            </div>

            <div class="caixa">
                <div class="grid-container">
                    {Filmes.map((filmes) => {
                        return (
                            <p key={filmes.id}>
                                <b>{filmes.name}</b> <br />
                                <div><img src={`https://image.tmdb.org/t/p/w300/${filmes.poster_path}`} alt={filmes.original_name} /></div> <br />
                                    <Link to={`/Detalhes/${filmes.id}`}><h2>Detalhes</h2></Link> <br />
                            </p>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default FilmesPopulares