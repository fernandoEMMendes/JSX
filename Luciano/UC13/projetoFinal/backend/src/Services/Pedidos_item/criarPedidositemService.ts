import prismaClient from "../../prisma";

interface criar {
    quant: string
    val_total: string
    produtoId: string
    pedidoId: string
}

export class criarPedidositemService {
    async execute({ produtoId, quant, val_total, pedidoId }: criar) {
        if (!produtoId || !quant || !pedidoId) {
            throw new Error("Campos em branco não permitidos!")
        }

        await prismaClient.pedidos_item.create({
            data: {
                quant: quant,
                val_total: val_total,
                produtoId: produtoId,
                pedidoId: pedidoId
            }
        })
        return { msg: "pedido_item adicionado com sucesso!" }
    }
}