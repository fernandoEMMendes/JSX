import prismaClient from "../../prisma";

interface ListarUnico {
    id: string
}

class ListarUnicoProdutoServices {
    async execute({ id }: ListarUnico) {
        const response = await prismaClient.products.findUnique({
            where: {
                id: id
            },
            select: {
                nome: true,
                fabricante: true,
                preco: true
            }
        })
        return response
    }
}

export { ListarUnicoProdutoServices }