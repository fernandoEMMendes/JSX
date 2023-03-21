import Botaocss from "./estilobotao.css"


function Botao(props) {
    return (
        <button className="Botaocss" onClick={props.acaoBtn}>{props.name}</button>
    )
}

export default Botao