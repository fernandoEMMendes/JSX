import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"
import cors from "cors"

import { router } from "./routes"

const app = express()

//função use do express() : Ira utilzar as funcionalidades do cors
app.use(cors())

//função use do express() : Como o express será utilizado (no caso como json) 
app.use(express.json())

//função use do express() : Ira utilizar o router do ".router.ts"
app.use(router)

//função use do express() : Chamar os metodos que seram utilizados na função anonima
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    
    //Retornando erros comums do servidor para o usuario
    //Retornando o erro 401 com uma mensagem já pronto
    if (err instanceof Error) {
        return res.status(401).json({
            error: err.message
        })
    }

    //Retornando o erro 500 com uma mensagem personalizada
    return res.status(500).json({
        status: "Erro interno do servidor"
    })
})

//Subindo o servidor : Porta que será utilizada : Mensagem que será enviada ao iniciar servidor
app.listen(7602, () => {console.log("Servidor iniciado na partoa 7602")})