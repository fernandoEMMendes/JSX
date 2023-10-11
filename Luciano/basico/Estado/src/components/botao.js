import botao from "./estilobotao.css"
function Botao(props){
    return(
        <div>
            <button className="botao" onClick={props.acaoBtn}>{props.name}</button>            
        </div>
    )
}
export default Botao