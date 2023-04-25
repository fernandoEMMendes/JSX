import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import api from "../../services/api.js"

function Info() {

    const { id } = useParams()
    const [Pokemon, setPokemon] = useState({})


    useEffect(() => {
        async function loadinfo() {
            const response = await api.get(`/pokemon/${id}`, {
                params: {
                    language: "pt-BR",
                }
            })
            setPokemon(response.data)
        }
        loadinfo()
    }, [id])

    return (
        <>
            <div>
                <h1>{Pokemon.name} è um pokemon do tipo {Pokemon.type}</h1>


                <button>Favoritar</button>
            </div>
        </>
    )


}


export default Info