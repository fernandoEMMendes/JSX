import prismaClient from "../../prisma";

interface aceitar {
    pedidoId: string
    novoAceito: boolean
    novoRascunho: string
}

export class aceitarPedidoService {
    async execute({ novoAceito, pedidoId, novoRascunho }: aceitar) {
        await prismaClient.pedidos.update({
            where: {
                id: pedidoId
            }, data: {
                aceito: novoAceito,
                status: novoRascunho
            }
        })
    }
}