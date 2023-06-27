const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

//sempre checar se outro cmd do node está com a aplicação ligada, se estiver CTRL + C para desliga-la

//POST = enviar dados para o servidor
//GET = recuperar dados do servidor

//res = response
//req = request


app.get('/', (req, res) => {
    res.send("Node puro no Senac Bauru, vamos aprender a fazer uma API para consulta")
})


app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333")
})

