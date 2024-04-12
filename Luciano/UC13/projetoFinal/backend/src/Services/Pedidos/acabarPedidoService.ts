import prismaClient from "../../prisma";

interface acabar {
    pedidoId: string
    novoEntrega: boolean
}

export class AcabarServicoService {
    async execute({ novoEntrega, pedidoId }: acabar) {

        const resposta = await prismaClient.pedidos.update({
            where: {
                id: pedidoId
            }, data: {
                entrega: novoEntrega,
                status: "Finalizado."
            }
        })

        return resposta
    }
}