import {Request, Response} from "express"
import { CriarFilmeService } from "../../services/Filme/CriarFilmeService"

class CriarFilmeController {
    async handle(req: Request, res: Response) {
        const {nome, sinopse, lancamento} = req.body
        const criar = new CriarFilmeService()
        const response = await criar.execute({
            nome,
            sinopse,
            lancamento
        })
        return res.json(response)
    }
}

export {CriarFilmeController}