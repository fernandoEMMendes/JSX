const [cpf, setcpf] = useState("")
const [rg, setrg] = useState("")
const [data_nas, setdata_nas] = useState("")

function alert2() {
    alert(
        `cpf: ${cpf}
        rg: ${rg}
        data_nascimento: ${data_nas}`
    )
}


function Pag2() {
    return (
        <div>
            <h1>Pessoa Fisica</h1>
            <form onSubmit={alert2}>
                <label>cpf</label> <br />
                <input type="text" value={cpf} onChange={(e) => setcpf(e.target.value)} /> <br />

                <label>rg</label> <br />
                <input type="text" name={setrg} onChange={(e) => setrg(e.target.value)} /> <br />

                <label>Data Nascimento</label> <br />
                <input type="text" name={data_nas} onChange={(e) => setdata_nas(e.target.value)} /> <br />

                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Pag2