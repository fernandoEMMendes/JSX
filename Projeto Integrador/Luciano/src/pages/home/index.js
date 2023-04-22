import { useState, useEffect } from "react"
import api from "../../services/api.js"

import "../../components/css/Pagina.css"

function Inicio() {

    const [Pokemon, setPokemon] = useState([""])
    const [Moves, setMoves] = useState([""])

    useEffect(() => {
        async function loadpokemons() {
            const response = await api.get("/pokemon/", {
                params: {
                    language: "pt-BR"
                }
            })
            setPokemon(response.data.results)
        }
        loadpokemons()

        async function loadmoves() {
            const response = await api.get("/moves", {
                params: {
                    language: "pt-BR"
                }
            })
            setMoves(response.data.results)
        }
        loadmoves()

    }, [Pokemon])




    console.log(Pokemon)

    return (
        <div>
            {Pokemon.map((Poke) => {
                return (
                    <p key={Poke.id}>
                        <b>{Poke.name}</b> <br />
                    </p>
                )
            })}
        </div>
    )
}


export default Inicio