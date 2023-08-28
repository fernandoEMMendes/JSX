import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";


interface ApagarProdutos {
    remove: string
}

class ApagarProdutosServices {

    async execute({ remove }: ApagarProdutos) {

        await prismaClient.produtos.delete({
            where: {
                id: remove
            }
        })
        return { dados: "apagados com sucesso" }
    }
}

export { ApagarProdutosServices }