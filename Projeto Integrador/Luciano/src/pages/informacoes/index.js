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
                    language: "pt-BR"
                }
            })
            setPokemon(response.data.results)
        }
        loadinfo()
    }, [id])
    console.log(Pokemon)

    function salvarpokemon() {
        const ListaFav = localStorage.getItem("@PokemonsFavoritos")
        var PokeSalvos = JSON.parse(ListaFav) || []

        const verificarPokemons = PokeSalvos.some((PokeSalvo) => PokeSalvo.id === Pokemon.id)
        if (verificarPokemons) {
            alert("Vocês já favoritou este!")
            return
        }

        PokeSalvos.push(Pokemon)
        localStorage.setItem("@PokemonsFavoritos", JSON.stringify(PokeSalvos))
        alert("Salvo!")
    }

    return (
        <>
            <div>
                <h1>{Pokemon.name}</h1>


                <button onClick={salvarpokemon}>Favoritar</button>
            </div>
        </>
    )


}


export default Info