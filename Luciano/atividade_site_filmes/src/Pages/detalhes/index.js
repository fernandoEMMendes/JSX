import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../../Services/api'
import '../../Componentes/css/detalhes.css'
import moment from 'moment'

function Detalhes() {
    const { id } = useParams()
    const [filme, setFilme] = useState({})

    useEffect(() => {
        async function loadFilmeDetail() {
            const response = await api.get(`/movie/${id}`, {
                params: {
                    api_key: "d7467b74ee29835a60176efafc99b899",
                    language: 'pt-BR'
                }
            })
            setFilme(response.data)
        }
        loadFilmeDetail()
    }, [id])



    function Salvar() {
        const minhaLista = localStorage.getItem('@filmesfavoritos')
        let filmesSalvos = JSON.parse(minhaLista) || []
        const verificarFilmes = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)
        if (verificarFilmes) {
            alert('Filme já está salvo!')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('@filmesfavoritos', JSON.stringify(filmesSalvos))
        alert('Filme salvo!')
    }



    return (

        <div>
            <h1 className='h1detalhes'>{filme.title}</h1>
            <img className='imgdetalhes' src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt={filme.original_title} /> <br />
            <h3 className='h3detalhes'>{filme.overview}</h3><br />
            <h3 className='h3detalhes'>Nota: {Number(filme.vote_average).toFixed(1)}</h3> <br />
            <h3 className='h3detalhes'>Data de lançamento:{moment(new Date(`${filme.release_date}`)).format('DD-MM-YYYY')}</h3> <br /> <br />
            <button onClick={Salvar}>Salvar Filme</button>
        </div>
    )
}

export default Detalhes