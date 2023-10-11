import prismaClient from "../../prisma";


interface ApagarProdutos {
    remove: string
}

class ApagarProdutosServices {

    async execute({ remove }: ApagarProdutos) {

        await prismaClient.products.delete({
            where: {
                id: remove
            }
        })
        return { dados: "apagado com sucesso" }
    }
}

export { ApagarProdutosServices }