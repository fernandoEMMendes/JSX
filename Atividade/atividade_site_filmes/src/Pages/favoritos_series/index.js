import { useState, useEffect } from "react";


function FavoritosSeries() {

    const [series, setseries] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('@seriesfavoritas')
        setseries(JSON.parse(minhaLista) || [])


    }, [])

    return (
        <div>
        {series.map((serie) => {
            <a key={serie.id}>
                <a></a>
            </a>
            })}
        </div>
    )
}
export default FavoritosSeries