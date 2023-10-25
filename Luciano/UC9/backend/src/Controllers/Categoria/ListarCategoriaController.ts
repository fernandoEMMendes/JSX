import { Request, Response } from "express"
import { ListarCategoriaService } from "../../Services/Categoria/ListarCategoriaService"

export class ListarCategoriaController {
    async handle(req: Request, res: Response) {
        
        const listar = new ListarCategoriaService()
        const response = await listar.execute()
        
        return res.json(response)
    }
}