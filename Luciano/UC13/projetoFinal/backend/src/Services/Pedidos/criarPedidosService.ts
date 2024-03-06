import prismaClient from "../../prisma";

interface criar {
    clienteId: string
}

export class criarPedidosService {
    async execute({ clienteId }: criar) {

        const resposta = await prismaClient.pedidos.create({
            data: {
                clienteId: clienteId,
            }, select: {
                id: true,
                num: true
            }
        })
        return resposta
    }
}