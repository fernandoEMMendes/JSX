import { useState, useEffect } from "react"
import "./Home.css"

function Home() {

    const [codcliente, setcliente] = useState("")

    const [nome, setnome] = useState("")
    const [tel_fixo, settel_fixo] = useState("")
    const [tel_cel, settel_cel] = useState("")
    const [rua, setrua] = useState("")
    const [complemento, setcomplemento] = useState("")
    const [cep, setcep] = useState("")
    const [bairro, setbairro] = useState("")
    const [cidade, setcidade] = useState("")
    const [estado, setestado] = useState("")

    const [cpf, setcpf] = useState("")
    const [rg, setrg] = useState("")
    const [data_nas, setdata_nas] = useState("")

    const [cnpj, setcnpj] = useState("")
    const [ie, setie] = useState("")
    const [sit_cadastro, setsit_cadastro] = useState("")

    function alert2() {
        alert(
            `cpf: ${cpf}
            rg: ${rg}
            data_nascimento: ${data_nas}`
        )
    }

    function alert3() {
        alert(
            `cnpj: ${cnpj}
            ie: ${ie}
            situação: ${sit_cadastro}`
        )
    }

    useEffect(() => {
        function cliente() {
            setcliente(Math.round(Math.random() * 9999))
        }
        cliente()
    }, [])


    async function alert1(e) {
        e.preventDefault()
        if (nome === "" || tel_cel === "" || rua === "" || complemento === "" || cep === "" || bairro === "" || cidade === "" || estado === "") {
            alert("Campos obrigatorios não preenchidos!")
        } else {
            alert(`nome: ${nome}\n tel_fixo: ${tel_fixo}\n tel_cel: ${tel_cel}\n rua: ${rua}\n complemento: ${complemento}\n cep: ${cep}\n bairro: ${bairro}\n cidade: ${cidade}\n estado: ${estado}`)
        }
    }

    return (
        <div>
            <div className="align">
                <h1>Cliente</h1>
                <form>
                    <label>Codigo do cliente</label> <br />
                    <input disabled type="text" value={codcliente} onChange={(e) => setcliente(e.target.value)} /> <br /> <br /> <br />

                    <label >Nome Completo</label> <br />
                    <input required type="text" value={nome} onChange={(e) => setnome(e.target.value)} placeholder="obrigatório" /> <br />

                    <label>Telefone Fixo</label> <br />
                    <input type="text" value={settel_fixo} onChange={(e) => settel_fixo(e.target.value)} /> <br />

                    <label>Telefone Celular</label> <br />
                    <input required type="text" value={settel_cel} onChange={(e) => settel_cel(e.target.value)} placeholder="obrigatório" /> <br />

                    <label>Rua</label> <br />
                    <input required type="text" value={setrua} onChange={(e) => setrua(e.target.value)} placeholder="obrigatório" /> <br />

                    <label>complemento(N° da moradia ou andar+N°)</label> <br />
                    <input required type="text" value={setcomplemento} onChange={(e) => setcomplemento(e.target.value)} placeholder="obrigatório" /> <br />

                    <label>cep</label> <br />
                    <input required type="text" value={setcep} onChange={(e) => setcep(e.target.value)} placeholder="obrigatório" /> <br />

                    <label>bairro</label> <br />
                    <input required type="text" value={setbairro} onChange={(e) => setbairro(e.target.value)} placeholder="obrigatório" /> <br />

                    <label>cidade</label> <br />
                    <input required type="text" value={setcidade} onChange={(e) => setcidade(e.target.value)} placeholder="obrigatório" /> <br />

                    <label>estado</label> <br />
                    <input required type="text" value={setestado} onChange={(e) => setestado(e.target.value)} placeholder="obrigatório" /> <br />

                    <button onClick={alert1} type="submit">submit</button>
                </form>
            </div>

            <br />

            <div className="align">
                <h1>Pessoa Fisica</h1>
                <form>
                    <label>cpf</label> <br />
                    <input type="text" name={setcpf} onChange={(e) => setcpf(e.target.value)} /> <br />

                    <label>rg</label> <br />
                    <input type="text" name={setrg} onChange={(e) => setrg(e.target.value)} /> <br />

                    <label>Data Nascimento</label> <br />
                    <input type="text" name={setdata_nas} onChange={(e) => setdata_nas(e.target.value)} /> <br />

                    <button onClick={alert2} type="submit">submit</button>
                </form>
            </div>

            <br />

            <div className="align">
                <h1>Pessoa Juridica</h1>
                <form>
                    <label>cnpj</label> <br />
                    <input type="text" name={setcnpj} onChange={(e) => setcnpj(e.target.value)} /> <br />

                    <label>ie</label> <br />
                    <input type="text" name={setie} onChange={(e) => setie(e.target.value)} /> <br />

                    <label>situação cadastral</label> <br />
                    <input type="text" name={setsit_cadastro} onChange={(e) => setsit_cadastro(e.target.value)} /> <br />

                    <button onClick={alert3} type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}

export default Home