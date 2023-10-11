import { Request, Response } from "express";
import { AlterarProdutosServices } from "../../services/Produtos/AlterarProdutosServices";

class AlterarProdutosController {
    async handle(req: Request, res: Response) {
        const { id, NovoNome, NovoFabricante, NovoPreco } = req.body

        const alterarProdutosServices = new AlterarProdutosServices()
        const alterar = alterarProdutosServices.execute({
            id,
            NovoNome,
            NovoFabricante,
            NovoPreco
        })
        return res.json(alterar)
    }
}

export { AlterarProdutosController }