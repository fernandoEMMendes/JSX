import { useState } from "react"

function Pag3() {

    const [cnpj, setcnpj] = useState("")
    const [ie, setie] = useState("")
    const [sit_cadastro, setsit_cadastro] = useState("")

    function alert3() {
        alert(
            `cnpj: ${cnpj}
        ie: ${ie}
        situação: ${sit_cadastro}`
        )
    }



    return (
        <div>
            <h1>Pessoa Juridica</h1>
            <form onSubmit={alert3}>
                <label>cnpj</label> <br />
                <input type="text" name={cnpj} onChange={(e) => setcnpj(e.target.value)} /> <br />

                <label>ie</label> <br />
                <input type="text" name={ie} onChange={(e) => setie(e.target.value)} /> <br />

                <label>situação cadastral</label> <br />
                <input type="text" name={sit_cadastro} onChange={(e) => setsit_cadastro(e.target.value)} /> <br />

                <button type="submit">submit</button>
            </form>
        </div>
    )
}



export default Pag3