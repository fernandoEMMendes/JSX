import RotasAuth from "./auth.routes"
import Rotas from "./app.routes"

export default function RotasIndex() {

    const auth = false
    return (
        auth === true ? <RotasAuth /> : <Rotas />
    )
}