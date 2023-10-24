import { Request, Response } from "express"
import { CriarProdutoService } from "../../Services/Produtos/CriarProdutoServices"


class CriarProdutos {
    async handle(req: Request, res: Response) {
        const { nome, fabricante, quantidade, preco, categoryId } = req.body

        if (!req.file) {
            throw new Error('Imagem com problema')
        } else {
            const { originalname, filename: banner } = req.file

            const criar = new CriarProdutoService()
            const resposta = await criar.execute({
                nome,
                fabricante,
                quantidade,
                banner,
                preco,
                categoryId
            })
            return res.json(resposta)
        }

    }
}
export { CriarProdutos }