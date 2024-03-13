import prismaClient from "../../prisma";

interface cancelar {
    pedidoId: string
}

export class cancelarPedidosItemService {
    async execute({ pedidoId }: cancelar) {
        await prismaClient.pedidos_item.deleteMany({
            where: {
                pedidoId: pedidoId
            }
        })
    }
}