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


    function alert1() {
        alert(
            `cod_cliente: ${codcliente}
            nome: ${nome}
            tel_fixo: ${tel_fixo} 
            tel_cel: ${tel_cel}
            rua: ${rua}
            complemento: ${complemento}
            cep: ${cep}
            bairro: ${bairro}
            cidade: ${cidade}
            estado: ${estado}`
        )
    }

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



    return (
        <div className="align">
            <div>
                <h1>Cliente</h1>
                <form>
                    <label>Codigo do cliente</label> <br />
                    <input disabled type="text" value={codcliente} onChange={(e) => setcliente(e.target.value)} /> <br /> <br /> <br />

                    <label >Nome Completo</label> <br />
                    <input type="text" value={nome} onChange={(e) => setnome(e.target.value)} /> <br />

                    <label>Telefone Fixo</label> <br />
                    <input type="text" value={settel_fixo} onChange={(e) => settel_fixo(e.target.value)} /> <br />

                    <label>Telefone Celular</label> <br />
                    <input type="text" value={settel_cel} onChange={(e) => settel_cel(e.target.value)} /> <br />

                    <label>Rua</label> <br />
                    <input type="text" value={setrua} onChange={(e) => setrua(e.target.value)} /> <br />

                    <label>complemento</label> <br />
                    <input type="text" value={setcomplemento} onChange={(e) => setcomplemento(e.target.value)} /> <br />

                    <label>cep</label> <br />
                    <input type="text" value={setcep} onChange={(e) => setcep(e.target.value)} /> <br />

                    <label>bairro</label> <br />
                    <input type="text" value={setbairro} onChange={(e) => setbairro(e.target.value)} /> <br />

                    <label>cidade</label> <br />
                    <input type="text" value={setcidade} onChange={(e) => setcidade(e.target.value)} /> <br />

                    <label>estado</label> <br />
                    <input type="text" value={setestado} onChange={(e) => setestado(e.target.value)} /> <br />

                    <button onClick={alert1} type="submit">submit</button>
                </form>
            </div>
            
            <br />

            <h1>Pessoa Fisica</h1>
            <div>
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

            <h1>Pessoa Juridica</h1>
            <div>
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