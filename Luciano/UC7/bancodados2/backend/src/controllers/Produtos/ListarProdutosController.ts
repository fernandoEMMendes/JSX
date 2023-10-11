import { Request, Response } from "express";
import { ListarProdutosService } from "../../services/Produtos/ListarProdutosService";




class ListarProdutosController {

    async handle(req: Request, res: Response) {

        const listarProdutosService = new ListarProdutosService
        const produtos = await listarProdutosService.execute()
        return res.json(produtos)
    }
}

export { ListarProdutosController }