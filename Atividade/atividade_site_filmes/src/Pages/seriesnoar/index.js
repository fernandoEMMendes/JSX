import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../../Services/api.js"

import "../../Componentes/css/paginafilmes.css"

function SeriesNoAr() {

    const [Series, setSeries] = useState([""])


    useEffect(() => {
        async function loadseries() {
            const response = await api.get("/tv/on_the_air", {
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
                <h1> Series No Ar</h1>
            </div>


            <div className="caixa">
                <div className="grid-container">
                    {Series.map((series) => {
                        return (
                            <p key={series.id}>
                                <b>{series.name}</b> < br/>
                                <div><img src={`https://image.tmdb.org/t/p/w300/${series.poster_path}`} alt={series.original_name}/></div>
                                <Link to={`/Webseries`}><a>Detalhes</a></Link> < br/>
                            </p>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default SeriesNoAr