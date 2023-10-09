import express, {Request, Response, NextFunction} from "express"
import "express-async-errors";
import cors from "cors"

//Rotas
import { router } from "./router";

//Criação do app para utiliziar o metodo USE do Express
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.use((err: Error, req: Request, res:Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: "Error",
        message: "Erro interno do servidor"
    })
})

app.listen(4444, () => console.log("Servidor iniciado na porta 4444"))
