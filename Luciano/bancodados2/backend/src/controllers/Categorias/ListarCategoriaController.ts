import { Request, Response } from "express";
import { ListarCategoriaService } from "../../services/Categorias/ListarCategoriaService";

class ListarCategoriaController {
    async handle(req: Request, res: Response) {

        const listarCategoriaService = new ListarCategoriaService()
        const listar = await listarCategoriaService.execute()

        return res.json(listar)
    }
}

export { ListarCategoriaController }