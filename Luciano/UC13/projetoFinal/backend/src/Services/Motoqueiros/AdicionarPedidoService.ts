import prismaClient from "../../prisma";

interface adicionar {
    pedidoId: string
    motoqueiroId: string
}

export class AdicionarPedidoService {
    async execute({ pedidoId, motoqueiroId }: adicionar) {
        const resposta = await prismaClient.pedidos.update({
            where: {
                id: pedidoId
            }, data: {
                status: "A caminho...",
                motoqueiroId: motoqueiroId
            }
        })
        return resposta
    }
}