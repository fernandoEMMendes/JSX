
const express = require("express")

const mysql = require("mysql")

const cors = require("cors")

//express traz as funções necessarios para o back-end (post, get, etc. . . )
const app = express()

app.use(express.json())
app.use(cors())

//sempre checar se outro cmd do node está com a aplicação ligada, se estiver CTRL + C para desliga-la

//POST = enviar dados para o servidor
//GET = recuperar dados do servidor

//res = response
//req = request


//Essa é uma mensagem que o back-end ira receber
//app.get('/', (req, res) => {
//res.send("Node puro no Senac Bauru, vamos aprender a fazer uma API para consulta")
//})


app.post("/CadastroCliente", (req, res) => {
    //req(requisição).body(JSON).codcliente(qual constante quero pegar as infos, O NOME DEVE SER O MESMO)
    const codcliente = req.body.codcliente
    const nome = req.body.nome
    const tel_cel = req.body.tel_cel
    const tel_fixo = req.body.tel_fixo
    const rua = req.body.rua
    const numero = req.body.numero
    const complemento = req.body.complemento
    const cep = req.body.cep
    const bairro = req.body.bairro
    const cidade = req.body.cidade
    const estado = req.body.estado

    console.log(codcliente, nome, tel_cel, tel_fixo, rua, numero, complemento, cep, bairro, cidade, estado)
})








app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333")
})

