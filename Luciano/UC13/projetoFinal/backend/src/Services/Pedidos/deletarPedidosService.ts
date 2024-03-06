import prismaClient from "../../prisma";

interface criar {
    pedidoId: string
}

export class deletarPedidosService {
    async execute({ pedidoId }: criar) {
        if (!pedidoId) {
            throw new Error("Campos em brancos não são permitidos!")
        }

        await prismaClient.pedidos.delete({
            where: {
                id: pedidoId
            }
        })
        return { msg: "Pedido deletado com sucesso!" }
    }
}