import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api.js"

import "../../components/css/PaginaHome.css"

function Inicio() {

    const [Pokemon, setPokemon] = useState([""])
    const [Sprites, setSprites] = useState([""])

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

    }, [Pokemon])

    useEffect(() => {
        async function loadsprites() {
            const response2 = await api.get(`/pokemon/1`, {
                params: {
                    language: "pt-BR"
                }
            })
            setSprites(response2.data.results)
        }
        loadsprites()
    }, [Sprites])

    console.log(Pokemon)

    return (

        <>
            <div className="caixa">
                <div className="grid-container">
                    {Pokemon.map((Poke) => {
                        return (

                            <a key={Poke.id}>
                                <h2>{Poke.name}</h2> <br />
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`} /> <br />
                                <Link to={``}></Link>
                            </a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default Inicio