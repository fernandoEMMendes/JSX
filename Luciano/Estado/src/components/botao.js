function Botao(props){
    return(
        <div>
            <button onClick={props.acaoBtn}>{props.name}</button>            
        </div>
    )
}
export default Botao