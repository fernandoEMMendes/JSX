import {useContext} from "react"
import { Contexts } from "../../Contexts/AuthContext"
import RotasAuth from "./auth.routes"
import Rotas from "./app.routes"

export default function RotasIndex() {

    const {autenticado} = useContext(Contexts)

    return (
        autenticado  === true ? <RotasAuth /> : <Rotas />
    )
}