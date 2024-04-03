import prismaClient from "../../prisma"

interface finalizar {
    novoAceito: boolean
    pedidoId: string
    novoStatus: string
}

export class finalizarPedidoCozinhaService {
    async execute({ novoAceito, novoStatus, pedidoId }: finalizar) {
        const resposta = await prismaClient.pedidos.update({
            where: {
                id: pedidoId
            },
            data: {
                aceito: novoAceito,
                status: novoStatus
            }
        })
        return resposta
    }
}