import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../../Services/api.js"

import "../../Componentes/css/paginaemcartaz.css"

//ao deixar em modo janela o header buga

function FilmesCartaz() {

    const [Filmes, setFilmes] = useState([''])


    useEffect(() => {
        async function loadfilmes() {
            const response = await api.get("/movie/now_playing", {
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
                <h1>Filmes Em Cartaz</h1>
            </div>


            <div class="caixa">
                <div class="grid-container">
                    {Filmes.map((filme) => {
                        return (
                            <p key={filme.id}>
                                <b>{filme.title}</b> <br />
                                <div><img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt={filme.original_title} /></div>
                                <Link to="/Detalhes "><h2>Detalhes</h2></Link> <br />
                            </p>
                        )
                    })}
                </div>
            </div>



        </>
    )
}


export default FilmesCartaz