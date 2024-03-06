import prismaClient from "../../prisma";

export class listarPedidosService {
    async execute() {
        const resposta = await prismaClient.pedidos.findMany({
            orderBy: {
                create_at: "asc"
            }
        })
        return resposta
    }
}