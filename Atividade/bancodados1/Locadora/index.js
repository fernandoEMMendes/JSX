
const express = require("express")

const mysql = require("mysql")

const cors = require("cors")

//express traz as funções necessarios para o back-end (post, get, etc. . . )
const app = express()

app.use(express.json())
app.use(cors())

//sempre checar se outro cmd do node está com a aplicação ligada, se estiver CTRL + C para desliga-la

//POST = enviar dados para o servidor

//GET (select)= recuperar dados do servidor

//PUT (update)

//delete

//res = response
//req = request

//Essa é uma mensagem que o back-end ira receber
//app.get("", (req, res) => {
//res.send("Node puro no Senac Bauru, vamos aprender a fazer uma API para consulta")

//usar e abusar de console.log() para debugar

//criar uma constante que especificara para qual DB as informações devem ser enviadas
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'locadora'
})


//codigo para coletar as informações do front-end E envia-los para a DB
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


//comando para visualizar dados da tabela
app.get("/VerDados", (req, res) => {
    db.query(
        "SELECT * FROM cliente",
        (err, result) => {
            if (err) {
                res.send({ msg: "Dados não encontrado" })
            }
            res.send(result)
        }
    )
})

//comando para deletar dados da tabela
app.delete(`/deleteUser/:id`, (req, res) => {
    const { id } = req.params
    console.log(id)
    db.query(
        "DELETE FROM cliente WHERE id_cliente = ?",
        [id],     
    )
})

//comando para editar dados da tabela
app.put(`/editUser/:id`, (req, res) => {
    const {id} = req.params
})



//comando para visualizar UM UNICO dado da tabela
//app.get("/SelecionarDados", (req, res) => {
//    db.query(
//        "SELECT * FROM cliente WHERE id_cliente = {id}"
//    )
//})










app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333")
})

