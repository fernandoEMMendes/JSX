import prismaClient from "../../prisma";

export class ListarProdutosService {
    async execute() {
        const resposta = await prismaClient.produto.findMany({
            orderBy: {
                nome: "asc"
            }
        })
        return resposta
    }
}