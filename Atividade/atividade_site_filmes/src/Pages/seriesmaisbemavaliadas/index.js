import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../../Services/api"

import "../../Componentes/css/paginafilmes.css"

function SeriesMaisBemAvaliadas() {

    const [Series, setSeries] = useState([""])


    useEffect(() => {
        async function loadseries() {
            const response = await api.get("/tv/top_rated", {
                params: {
                    api_key: "1c3a0bc2c4667ade8dc5844ddf1f3561",
                    language: "pt-BR"
                }
            })

            setSeries(response.data.results)

        }
        loadseries()
    }, [Series])

    console.log(Series)


    return (
        <>
            <div>
                <h1> Series Mais Bem Avaliadas</h1>
            </div>


            <div class="caixa">
                <div class="grid-container">
                    {Series.map((series) => {
                        return (
                            <p key={series.id}>
                                <b>{series.name}</b> <br />
                                <div><img src={`https://image.tmdb.org/t/p/w300/${series.poster_path}`} alt={series.original_name} /></div>
<<<<<<< HEAD
                                <Link to={`/Detalhes/${series.id}`}><h2>Detalhes</h2></Link> <br />
=======
                                <Link to={`/Detalhes/${filme.id}`}><h2>Detalhes</h2></Link> <br />
>>>>>>> 74dc4ee0f467fe25dd21c07fb7da08cda4ba1a38
                            </p>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default SeriesMaisBemAvaliadas