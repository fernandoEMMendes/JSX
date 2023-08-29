import { Request, Response } from "express";
import { ApagarProdutosServices } from "../../services/Produtos/ApagarProdutosServices";

class ApagarProdutosController {
    async handle(req: Request, res: Response) {
        //remove = chave de identificação, nesse caso ele representa o id
        const { remove } = req.body
        const apagarProdutosServices = new ApagarProdutosServices()
        const apagar = await apagarProdutosServices.execute({
            remove
        })
        return res.json(apagar)
    }
}
export { ApagarProdutosController }