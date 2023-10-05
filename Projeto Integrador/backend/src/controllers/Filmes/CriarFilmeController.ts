import {Request, Response} from "express"
import { CriarFilmeService } from "../../services/Filmes/CriarFilmeService"

class CriarFilmeController {
    async handle(req: Request, res: Response) {
        const {nome, sinopse, lancamento} = req.body
        const criarFilmeService = new CriarFilmeService()
        const filmes = await criarFilmeService.execute({
            nome,
            sinopse,
            lancamento
        })
        return res.json(filmes)
    }
}

export {CriarFilmeController}