import Botaocss from "./estilobotao.css"


function Botao(props) {
    return (
        <button className="Botaocss">{props.name}</button>
    )
}

export default Botao