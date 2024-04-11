import prismaClient from "../../prisma";

export class listarPedidosService {
    async execute() {
        const resposta = await prismaClient.pedidos.findMany({
            orderBy: {
                create_at: "asc"
            }
        })
        return resposta
    }

    async listarItemPedido(){
        const resposta = await prismaClient.pedidos_item.findMany({
            orderBy:{
                create_at: 'asc'
            },
            include: {
                produto: true,
                pedido: true
            }
        })
        return resposta
    }

}