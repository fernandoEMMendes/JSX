import express, { Response, Request, NextFunction } from "express"
import "express-async-errors"
import cors from "cors"
import { router } from "./router"

const app = express()
app.use(express.json())
app.user(cors())
app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: "Erro",
        message: "Erro Interno Servidor"
    })
})

app.listen(3339, () => console.log("Servidor Rodando na Porta 3339"))