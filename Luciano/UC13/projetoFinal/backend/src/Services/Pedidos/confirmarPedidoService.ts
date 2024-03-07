import prismaClient from "../../prisma";

interface confirmar {
    pedidoId: string
    novoObservacao: string
    novoDraft: boolean
    novoRascunho: string
}

export class confirmarPedidoService {
    async execute({ pedidoId, novoObservacao, novoDraft, novoRascunho }: confirmar) {

        await prismaClient.pedidos.update({
            where: {
                id: pedidoId
            }, data: {
                observacao: novoObservacao,
                draft: novoDraft,
                status: novoRascunho
            }
        })
    }
}