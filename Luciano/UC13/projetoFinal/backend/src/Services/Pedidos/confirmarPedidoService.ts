import prismaClient from "../../prisma";

interface confirmar {
    pedidoId: string
    novoObservacao: string
    novoDraft: boolean
    novoRascunho: string
    novoValor: number
}

export class confirmarPedidoService {
    async execute({ pedidoId, novoObservacao, novoDraft, novoRascunho, novoValor }: confirmar) {

        await prismaClient.pedidos.update({
            where: {
                id: pedidoId
            }, data: {
                observacao: novoObservacao,
                draft: novoDraft,
                status: novoRascunho,
                ped_val_total: novoValor
            }
        })
    }
}