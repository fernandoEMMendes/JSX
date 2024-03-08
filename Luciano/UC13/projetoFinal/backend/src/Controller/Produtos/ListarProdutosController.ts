import { Request, Response } from "express";
import { ListarProdutosService } from "../../Services/Produtos/ListarProdutosService";

export class ListarProdutosController {
    async handle(req: Request, res: Response) {
        const listar = new ListarProdutosService()
        const resposta = await listar.execute()
        return res.json(resposta)
    }
}