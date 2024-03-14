import prismaClient from "../../prisma";

interface deletar {
    pedidositemId: string
}

export class deletarPedidositemService {
    async execute({ pedidositemId }: deletar) {

        await prismaClient.pedidos_item.delete({
            where: {
                id: pedidositemId
            },
        })
        return {msg: "pedidosItem deletado com sucesso!"}
    }
}