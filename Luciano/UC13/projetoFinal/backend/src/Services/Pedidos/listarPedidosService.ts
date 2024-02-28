import prismaClient from "../../prisma";

export class listarPedidosService {
    async execute() {
        const resposta = await prismaClient.pedidos.findMany({})
        return resposta
    }
}