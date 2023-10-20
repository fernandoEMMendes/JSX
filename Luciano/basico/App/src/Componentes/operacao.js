

function Multiplicacao(){

    function click(){
        let x = 40
        let y = 30
        let z = x * y
        alert(z)
    }
    return(
        <div>        
            <button onClick={click}>Multiplicar</button>   
        </div>
    )
}

export default Multiplicacao