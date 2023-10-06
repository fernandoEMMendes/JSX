import { Request, Response } from "express";
import { ListarFilmeService } from "../../services/Filmes/ListarFilmeService";

class ListarFilmeController {
    async handle(req: Request, res: Response) {

        const listar = new ListarFilmeService()
        const filmes = await listar.execute()
        
        return res.json(filmes)
    }
}

export { ListarFilmeController }