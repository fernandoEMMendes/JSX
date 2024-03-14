import prismaClient from "../../prisma";

interface criar {
    quant: string
    val_total: number
    produtoId: string
    pedidoId: string
}

export class criarPedidositemService {
    async execute({ produtoId, quant, val_total, pedidoId }: criar) {
        if (!produtoId || !quant || !pedidoId) {
            throw new Error("Campos em branco não permitidos!")
        }

        const resposta = await prismaClient.pedidos_item.create({
            data: {
                quant: quant,
                val_total: val_total,
                produtoId: produtoId,
                pedidoId: pedidoId
            },
            include: {
                produto: true
            }
        })
        return resposta
    }
}