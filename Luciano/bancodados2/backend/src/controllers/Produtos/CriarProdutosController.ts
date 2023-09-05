import { Request, Response } from 'express'
import { CriarProdutosServices } from '../../services/Produtos/CriarProdutosServices'

class CriarProdutosController{
    async handle(req: Request, res: Response){
        const { nome, fabricante, preco} = req.body

        const criarProdutosServices = new CriarProdutosServices()
        const produtos = await criarProdutosServices.execute({
            nome,
            fabricante,
            preco
        })
        return res.json(produtos)
    }
}

export { CriarProdutosController }