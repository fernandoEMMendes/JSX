import prisma from "../../prismaClient"

interface CriarProdutos {
    nome: string
    fabricante: string
    quantidade: string
    banner: string
    preco: string
    categoryId: string
}

export class CriarProdutoService {
    async execute({ nome, fabricante, quantidade, banner, preco, categoryId }: CriarProdutos) {

        await prisma.products.create({
            data: {
                nome,
                fabricante,
                quantidade,
                banner,
                preco,
                categoryId
            }
        })
        return { dados: "Produto cadastrado com sucesso" }

    }

}