import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../Services/api"

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

    return (
        <>
            <div>

                <h1 className="h1detalhes">{filme.title}</h1> <br />
                <div><img class="imgdetalhes" src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt={filme.original_name} /></div> <br />
                <h3 className="h3detalhes">{filme.overview}</h3> <br /> <br />
                <h3 className="h3detalhes">Data de lançamento (US): {filme.release_date}</h3>

            </div>
        </>
    )
}

export default Detalhes