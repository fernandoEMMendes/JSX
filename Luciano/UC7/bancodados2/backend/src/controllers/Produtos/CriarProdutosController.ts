import { Request, Response } from 'express'
import { CriarProdutosServices } from '../../services/Produtos/CriarProdutosServices'

class CriarProdutosController {
    async handle(req: Request, res: Response) {
        const { nome, fabricante, preco, categoriaId } = req.body

        if (!req.file) {
            throw new Error("Imagem com pobremas")
        }

        const { originalname, filename: banner } = req.file
        const criarProdutosServices = new CriarProdutosServices()
        const produtos = await criarProdutosServices.execute({
            nome,
            fabricante,
            preco,
            banner,
            categoriaId
        })
        return res.json(produtos)
    }
}

export { CriarProdutosController }