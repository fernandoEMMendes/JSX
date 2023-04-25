import { Link } from "react-router-dom"
import { useState } from "react"
import api from "../../services/api";

import "../../components/css/PaginaHome.css"

//a fazer:
//melhorar css (centralizar elementos), responsibilidade

//colocar página de favoritos

//colocar um botão abaixo do pokemon exibido que levara para página "mais informações"

//página info está quebrada e inutilizada

//Consertar erro ao buscar sem nada na caixa de pesquisa

//atualizar com os conteudo de aula

function Inicio() {
    const [pokemon, setpokemon] = useState('');
    const [details, setdetails] = useState(null);

    //function campos() {
    //    if (pokemon === "") { alert("Por favor, forneça um nome ou número") }
    //    return
    //}


    const handleClick = async () => {
        try {
            const response = await api.detalhe(pokemon)
            setdetails(response);
        } catch (error) {
            setdetails({ error: "Não encontrado" });
        }
    };

    return (
        <div>
            <h1>Procure por um Pokemon</h1> <br />
            <input className="pesquisa" value={pokemon} onChange={event => setpokemon(event.target.value)} placeholder="Ex: 'Pikachu' ou '6'" />
            <button className="pesquisa" onClick={handleClick}>Search</button> < br /> <br />
            <Link to="https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_National_Pokédex_number" className="link">Lista com todos os pokemons (bulbagarden)</Link> <br /> <br />

            {details && (
                details.error ? (
                    <h1>{details.error}</h1>
                ) : (
                    <div>
                        <h1 className="texto">{details.name}</h1>
                        <img src={details.sprites.front_default} alt="Imagine algo legal aqui" />
                        <img src={details.sprites.back_default} alt="Imagine algo legal aqui" />
                        <p>{details.height}</p>
                        <p>{details.weight}</p>
                    </div>
                ))}
        </div>
    );
}



export default Inicio