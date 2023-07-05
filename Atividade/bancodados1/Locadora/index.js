
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


//criar uma constante que especificara para qual DB as informações devem ser enviadas
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'locadora'
})



app.post("/CadastroCliente", (req, res) => {
    //req(requisição).body(JSON).codcliente(qual constante quero pegar as infos, O NOME DEVE SER O MESMO)
    const codcliente = req.body.codcliente
    const nome = req.body.nome
    const tel_cel = req.body.tel_cel
    const tel_fixo = req.body.tel_fixo
    const rua = req.body.rua

    const complemento = req.body.complemento
    const cep = req.body.cep
    const bairro = req.body.bairro
    const cidade = req.body.cidade
    const estado = req.body.estado

    db.query(
        'INSERT INTO cliente ( cod_cliente, nome, tel_fixo, tel_celular, rua, complemento, cep, bairro, cidade, estado) VALUES (?,?,?,?,?,?,?,?,?,?)',
        [codcliente, nome, tel_fixo, tel_cel, rua, complemento, cep, bairro, cidade, estado],
        (err) => {
            if (err) {
                res.send(err)
            }
            res.send({ msg: 'Cliente Cadastrado com Sucesso' })


        }
    )
})



app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333")
})

