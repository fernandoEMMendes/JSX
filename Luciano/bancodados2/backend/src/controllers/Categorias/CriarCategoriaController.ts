import { Request, Response } from "express";
import { CriarCategoriaService } from "../../services/Categorias/CriarCategoriaService";


class CriarCategoriaController {
    async handle(req: Request, res: Response) {
        const { nome } = req.body

        const criarCategoriaService = new CriarCategoriaService()
        const categoria = await criarCategoriaService.execute({
            nome
        })
        return res.json(categoria)
    }
}

export { CriarCategoriaController } 