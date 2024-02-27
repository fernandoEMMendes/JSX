import prismaClient from "../../prisma";

interface criar {
    num: string
    status: string
    draft: boolean
    entrega: boolean
    observacao: string
    ped_val_total: string
    clienteId: string
    motoqueiroId: string
}

export class criarPedidosService {
    async execute({ ped_val_total, draft, entrega, num, status, observacao, clienteId, motoqueiroId }: criar) {

        await prismaClient.pedidos.create({
            data: {
                num: num,
                status: status,
                draft: draft,
                entrega: entrega,
                observacao: observacao,
                ped_val_total: ped_val_total,
                clienteId: clienteId,
                motoqueiroId: motoqueiroId,
            }
        })
        return { msg: "pedido criado com sucesso!" }
    }
}