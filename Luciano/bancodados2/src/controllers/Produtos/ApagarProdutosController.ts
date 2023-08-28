import { Request, Response } from "express";
import { ApagarProdutosServices } from "../../services/Produtos/ApagarProdutosServices";

class ApagarProdutosController {
    async handle(req: Request, res: Response) {
        const { remove } = req.body
        const apagarProdutosServices = new ApagarProdutosController()
        const apagar = await ApagarProdutosServices
    }
}
export { ApagarProdutosController }