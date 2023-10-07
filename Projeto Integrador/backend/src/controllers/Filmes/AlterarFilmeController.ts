import { Request, Response } from "express"
import { AlterarFilmeService } from "../../services/Filmes/AlterarFilmeService"
2
class AlterarFilmeController {
    async handle(req: Request, res: Response) {
        const { filmeId, novoNome, novoSinopse, novoLancamento } = req.body
        const alterar = new AlterarFilmeService()
        const response = await alterar.execute({
            filmeId,
            novoNome,
            novoSinopse,
            novoLancamento
        })
        return res.json(response)
    }
}

export { AlterarFilmeController }