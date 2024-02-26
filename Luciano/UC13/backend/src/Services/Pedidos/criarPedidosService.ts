import prismaClient from "../../prisma";

interface criar {
    num: string
    status: string
    observacao: string
    clienteId: string
    usuarioId: string
    motoqueiroId: string
    pedido_itemId: string
}

export class criarPedidosService {
    async execute({ num, status, observacao, clienteId, usuarioId, motoqueiroId, pedido_itemId }: criar) {
        if (!num || !status || !observacao || !clienteId || !usuarioId || !motoqueiroId || !pedido_itemId) {
            throw new Error("Campos obrigátorios em branco")
        }

        await prismaClient.pedidos.create({
            data: {
                num: num,
                status: status,
                observacao: observacao,
                clienteId: clienteId,
                usuarioId: usuarioId,
                motoqueiroId: motoqueiroId,
                pedido_itemId
            }
        })
    }
}