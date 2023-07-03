
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
    const codcliente = req.body.codcliente
    const nome = req.body.nome

    console.log(codcliente, nome)
})

app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333")
})

