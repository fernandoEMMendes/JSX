import { useState, useEffect } from "react"
import api from "../../services/apiCep"
import apiBack from "../../services/apiBack"
import "./Home.css"

import { Navigate, useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate()

    const [codcliente, setcliente] = useState("")

    const [nome, setnome] = useState("")
    const [tel_fixo, settel_fixo] = useState("")
    const [tel_cel, settel_cel] = useState("")
    const [rua, setrua] = useState("")
    //const [numero, setnumero] = useState("")
    const [complemento, setcomplemento] = useState("")
    const [cep, setcep] = useState("")
    const [bairro, setbairro] = useState("")
    const [cidade, setcidade] = useState("")
    const [estado, setestado] = useState("")

    const [BuscaCep, setBuscaCep] = useState("")


    //Gerar um número aleatorio para identificação de cliente
    useEffect(() => {
        function cliente() {
            setcliente(Math.round(Math.random() * 9999))
        }
        cliente()
    }, [])




    //API ViaCep

    //Função para a api resgatar valores apartir do CEP
    async function Handlecep() {
        const response = await api.get(`/${cep}/json/`)
        setBuscaCep(response.data)
    }

    //Função para definir as informações das constantes
    useEffect(() => {
        function addBuscaCep() {
            setrua(BuscaCep.logradouro)
            setbairro(BuscaCep.bairro)
            setcidade(BuscaCep.localidade)
            setestado(BuscaCep.uf)
        }
        addBuscaCep()
    }, [Handlecep]);




    //API Back

    //alert das informações
    async function alert1(e) {
        e.preventDefault()

        //alert(`nome: ${nome}\n tel_fixo: ${tel_fixo}\n tel_cel: ${tel_cel}\n rua: ${rua}\n numero: ${numero} \n complemento: ${complemento}\n cep: ${cep}\n bairro: ${bairro}\n cidade: ${cidade}\n estado: ${estado}`)
        console.log(cep)

        apiBack.post("/CadastroCliente", {
            codcliente,
            nome,
            tel_fixo,
            tel_cel,
            rua,
            //numero,
            complemento,
            cep,
            bairro,
            cidade,
            estado
        })
        navigate("/pagm")
    }

    return (
        <div>
            <div className="align">
                <h1>Cliente</h1>
                <form onSubmit={alert1}>
                    <label>Codigo do cliente</label> <br />
                    <input disabled type="text" value={codcliente} onChange={(e) => setcliente(e.target.value)} /> <br /> <br /> <br />

                    <label >Nome Completo</label> <br />
                    <input required type="text" value={nome} onChange={(e) => setnome(e.target.value)} placeholder="(obrigatório)" /> <br />

                    <label>Telefone Celular</label> <br />
                    <input required type="text" value={tel_cel} onChange={(e) => settel_cel(e.target.value)} placeholder="(obrigatório)" /> <br />

                    <label>Telefone Fixo</label> <br />
                    <input type="text" value={tel_fixo} onChange={(e) => settel_fixo(e.target.value)} /> <br />

                    <label>cep</label> <br />
                    <input required type="text" value={cep} onBlur={Handlecep} onChange={(e) => setcep(e.target.value)} placeholder="(obrigatório)" /> <br />

                    <label>complemento (N°) ou (andar + N°)</label> <br />
                    <input type="text" value={complemento} onChange={(e) => setcomplemento(e.target.value)} placeholder="Ex: andar" /> <br />

                    <label>Rua</label> <br />
                    <input disabled required type="text" value={rua} placeholder="(obrigatório)" /> <br />

                    <label>bairro</label> <br />
                    <input disabled required type="text" value={bairro} placeholder="(obrigatório)" /> <br />

                    <label>cidade</label> <br />
                    <input disabled required type="text" value={cidade} placeholder="(obrigatório)" /> <br />

                    <label>estado</label> <br />
                    <input disabled srequired type="text" value={estado} placeholder="(obrigatório)" /> <br />

                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}

export default Home