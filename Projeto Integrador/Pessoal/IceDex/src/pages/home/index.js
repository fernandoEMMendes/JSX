import { Link } from "react-router-dom"
import { useState } from "react"
import api from "../../services/api";

import "../../components/css/PaginaHome.css"

//a fazer:
//melhorar css (centralizar elementos), responsibilidade

//colocar página de favoritos

//colocar um botão abaixo do pokemon exibido que levara para página "mais informações"
//página info está quebrada e inutilizada por agora

//Consertar erro ao buscar sem nada na caixa de pesquisa

//atualizar com os conteudo de aula

function Inicio() {
    const [pokemon, setpokemon] = useState('');

    const [details, setdetails] = useState(null);
    //    const [abilities, setabilities] = useState(null);

    //    function campos() {
    //        if (pokemon === "") { alert("Por favor, forneça um nome ou número") }
    //        return
    //    }


    const handleClick = async () => {
        try {
            const response = await api.detalhe(pokemon)
            setdetails(response);
            //            const response2 = await api.detalhe(abilities)
            //            setabilities(response2);
        } catch (error) {
            setdetails({ error: "not found" });
        };


    };


    function Info() {
        const PokeInfo = localStorage.getItem('@pokemonescolhido')
        var PokeEscolhido = JSON.parse(PokeInfo) || []
        const verificar = PokeEscolhido.some((PokeInfo) => PokeInfo.id === undefined )
        if (verificar) {} else {
            alert('Por favor limpe o console!')
        }

        PokeEscolhido.push(pokemon)
        localStorage.setItem('@pokemonescolhido', JSON.stringify(PokeEscolhido))
    }


    return (
        <div>
            <h1>Procure por um Pokemon</h1> <br />
            <input className="pesquisa" value={pokemon} onChange={event => setpokemon(event.target.value)} placeholder="Ex: 'Pikachu' ou '6'" />
            <button className="pesquisa" onClick={handleClick}>Search</button> < br /> <br />
            <Link to="https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_National_Pokédex_number" className="link">Bulbagarden</Link> <br /> <br />

            {details && (
                details.error ? (
                    <h1>{details.error}</h1>
                ) : (
                    <div>
                        <h1 className="texto">{details.name}</h1>
                        <img src={details.sprites.front_default} alt="Imagine algo legal aqui" />
                        <img src={details.sprites.back_default} alt="Imagine algo legal aqui" />
                        <button onClick={Info} to="/informacoes"></button>
                    </div>
                ))}
        </div>
    );
}



export default Inicio