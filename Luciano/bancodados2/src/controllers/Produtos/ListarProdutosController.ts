import { Request, Response } from "express";
import prismaClient from "../../prisma";




class ListarProdutosController {

    async handle(req: Request, res: Response) {

        const produtos = await prismaClient.produtos.findMany({})
        return res.json(produtos)
    }
}

export { ListarProdutosController }