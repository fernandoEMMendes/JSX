import Botaotochacss from "./estilobotao.css"


function Botaotocha(props) {
    return (
        <button className="Botaotochacss" onClick={props.acaoBtn}>{props.name}</button>
    )
}

export default Botaotocha