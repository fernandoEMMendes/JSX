import { useState } from "react"
import { useEffect } from "react"
import api from "../../Services/api.js"

import "../../Componentes/css/pagina.css"



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
        <div>
            <h1>Filmes Em Cartaz</h1>
            {Filmes.map((filme)=> {
                return(
                    <p>
                        <b>{filme.title}</b>
                    </p>
                )
            })}
        </div>


    )
}


export default FilmesCartaz