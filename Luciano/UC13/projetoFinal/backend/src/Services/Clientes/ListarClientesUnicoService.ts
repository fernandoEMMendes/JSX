import prismaClient from "../../prisma";

interface listarUnico {
    clienteID: string
}

export class ListarClientesUnicoService {
    async execute({ clienteID }: listarUnico) {

        if (!clienteID) {
            throw new Error("Cliente não encontrado")
        }

        const resposta = await prismaClient.cliente.findFirst({
            where: {
                id: clienteID
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })
        return ({ resposta })
    }
}