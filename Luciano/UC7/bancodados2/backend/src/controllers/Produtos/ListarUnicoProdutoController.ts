import { Request, Response } from "express";
import { ListarUnicoProdutoServices } from "../../services/Produtos/ListarUnicoProdutoService";

class ListarUnicoProdutoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const listarUnicoProdutoServices = new ListarUnicoProdutoServices()
        const response = await listarUnicoProdutoServices.execute({
            id
        })
        return res.json(response)
    }
}

export { ListarUnicoProdutoController }