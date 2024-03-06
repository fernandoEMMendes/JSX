import prismaClient from "../../prisma";

interface confirmar {
    pedidoId: string
    novoObservacao: string
    novoDraft: boolean
}

export class confirmarPedidoService {
    async execute({ pedidoId, novoObservacao, novoDraft }: confirmar) {

        await prismaClient.pedidos.update({
            where: {
                id: pedidoId
            }, data: {
                observacao: novoObservacao,
                draft: novoDraft
            }
        })
    }
}