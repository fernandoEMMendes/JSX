import prismaClient from "../../prisma";

interface atualizar {
    novaQuant: string
    pedidositemId: string
}

export class atualizarPedidositemService {
    async execute({ pedidositemId, novaQuant }: atualizar) {
        await prismaClient.pedidos_item.update({
            where: {
                id: pedidositemId
            }, data: {
                quant: novaQuant
            }
        })
        return { msg: "Atualizado com sucesso!" }
    }
}