import { Request, Response } from "express";
import { ListarUnicoFilmeService } from "../../services/Filmes/ListarUnicoFilmeService";

class ListarUnicoFilmeController {
    async handle(req: Request, res: Response) {
        const { filmeId } = req.body
        const listarUnico = new ListarUnicoFilmeService()
        const response = await listarUnico.execute({
            filmeId
        })
        return res.json(response)
    }
}

export { ListarUnicoFilmeController }