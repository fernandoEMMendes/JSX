import { Request, Response } from "express";
import { ListarProdutosCategoriaService } from "../../Services/Produtos/ListarProdutosCategoriaService";

export class ListarProdutosCategoriaController {
    async handle(req: Request, res: Response) {
        const { categoriaId } = req.params
        console.log(categoriaId)
        const listar = new ListarProdutosCategoriaService()
        const resposta = await listar.execute({
            categoriaId
        })
        return res.json(resposta)
    }
}