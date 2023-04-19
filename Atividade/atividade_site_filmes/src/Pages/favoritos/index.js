import { localeData } from "moment";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function Favoritos() {
    const minhaLista = localStorage.getItem("@FilmesFavoritos")
    const [filme, setfilme] = useState({})

    var FilmesSalvos = JSON.parse(minhaLista)
    setfilme(FilmesSalvos)

    useEffect(() => {
        async function loadfavoritos() {
            const response = await localStorage.getItem
        }
    })
}


return(
    <div>
        {filmes.title}
    </div>
)


export default Favoritos