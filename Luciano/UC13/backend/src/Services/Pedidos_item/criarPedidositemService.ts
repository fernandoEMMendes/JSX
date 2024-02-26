import prismaClient from "../../prisma";

interface criar {
    produtoId: string
    quant: string
    val_unit: string
    val_total: string
}

export class criarPedidositemService {
    async execute({ produtoId, quant, val_total, val_unit }: criar) {
        if (!produtoId || !quant || !val_total || !val_unit) {
            throw new Error("Campos em branco não permitidos!")
        }

        await prismaClient.pedidos_item.create({
            data: {
                produtoId: produtoId,
                quant: quant,
                val_total: val_total,
                val_unit: val_unit
            }
        })
        return { msg: "pedido_item adicionado com sucesso!" }
    }
}