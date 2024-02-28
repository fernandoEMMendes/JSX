import prismaClient from "../../prisma";

interface atualizar {
    pedidoId: string
    novoNum: string
    novoStatus: string
    novoDraft: boolean
    novoEntrega: boolean
    novoObservacao: string
    novoPed_val_total: string
    novoClienteId: string
    novoMotoqueiroId: string
}

export class atualizarPedidosService {
    async execute({ pedidoId, novoClienteId, novoDraft, novoEntrega, novoMotoqueiroId, novoNum, novoObservacao, novoPed_val_total, novoStatus }: atualizar) {

        await prismaClient.pedidos.update({
            where: {
                id: pedidoId
            },
            data: {
                ped_val_total: novoPed_val_total,
                clienteId: novoClienteId,
                draft: novoDraft,
                entrega: novoEntrega,
                motoqueiroId: novoMotoqueiroId,
                num: novoNum,
                observacao: novoObservacao,
                status: novoStatus
            }
        })
    }
}