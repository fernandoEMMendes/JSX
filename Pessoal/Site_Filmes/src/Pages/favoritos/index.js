import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../../Componentes/css/favoritos.css"


export default function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem('@filmesfavoritos')
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function Excluirfilme(id) {
        var filtroFilme = filmes.filter((item) => {
            return (item.id !== id)
        })
        setFilmes(filtroFilme);
        localStorage.setItem('@filmesfavoritos', JSON.stringify(filtroFilme))
    }



    return (

        <div>
            {filmes.map((filme) => {
                return (

                    <article key={filme.id}>
                        <a className='article'>{filme.title}</a> <br />
                        
                        <Link class="Detalhes" to={`/Detalhes/${filme.id}`}>Detalhes</Link><br />
                        <button class="enviar" onClick={() => Excluirfilme(filme.id)}>Excluir</button>
                    </article>
                )
            })}
            <div>
            </div>
        </div>
    )
}