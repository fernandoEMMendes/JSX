import prismaClient from "../../prisma";

interface somar {
    id: string
}

export class somarPedidosItemService {
    async execute({ id }: somar) {
        const resposta = await prismaClient.pedidos_item.aggregate({
            _sum: {
                val_total: true
            },
            where: {
                pedidoId: id
            }
        })
        return resposta._sum.val_total
    }
}