import {Link} from "react-router-dom"
import { useState } from "react"
import api from "../../services/api";

function Inicio() {
    const [pokemon, setpokemon] = useState('');
    const [details, setdetails] = useState(null);

    const handleClick = async () => {
        try {
            const responce = await api.detalhe(pokemon)
            setdetails(responce);
        } catch (err) {
            setdetails({ error: "Não encontrado" });
        }
    };

    return (
        <div>
            <h1>Procure por um Pokemon</h1> <br />
            <input value={pokemon} onChange={event => setpokemon(event.target.value)} placeholder="Ex: 'Pikachu' ou '6'"/>
            <button onClick={handleClick}>Search</button> < br/> <br />
            <Link to="https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_National_Pokédex_number">Lista com todos os pokemons (bulbagarden)</Link>

            {details && (
                details.error ? (
                    <h1>{details.error}</h1>
                ) : (
                    <div>
                        <h1>{details.name}</h1>
                        <img src={details.sprites.front_default} alt="Imagine algo legal aqui" />
                        <h3>{details.moves.move}</h3>
                    </div>
                ))}
        </div>
    );
}



export default Inicio