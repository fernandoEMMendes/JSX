import prismaClient from "../../prisma";

interface listar {
    categoriaId: string
}

export class ListarProdutosCategoriaService {
    async execute({ categoriaId }: listar) {
        const resposta = await prismaClient.produto.findMany({
            where: {
                categoriaId: categoriaId
            }
        })
        return resposta
    }
}