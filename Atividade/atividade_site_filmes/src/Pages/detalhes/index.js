import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function Detalhes() {
    const { id } = useParams()
    const [filme, setfilme] = useState({})

    return (
        <div>
            <h1>Detalhes</h1>
        </div>
    )
}

export default Detalhes