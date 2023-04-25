import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem('@filmesfavoritos')
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    console.log(filmes)



    return (

        <div>
            {filmes.map((filme) => {
                return (

                    <article key={filme.id}>
                        <h1 className='article'>{filme.title}</h1>
                        <Link class="Detalhes" to={`/Detalhes/${filme.id}`}>Detalhes</Link><br />
                        <button class="enviar">Excluir</button>
                    </article>
                )
            })}
            <div>
            </div>
        </div>
    )
}