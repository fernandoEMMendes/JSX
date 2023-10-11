import prismaClient from "../../prisma";

interface ListarUnico {
    id: string
}

class ListarUnicoClienteServices {
    async execute({ id }: ListarUnico) {
        const response = await prismaClient.client.findUnique({
            where: {
                id: id
            },
            select: {
                nome: true,
                telefone: true,
                rua: true,
                casa: true,
                complemento: true,
                bairro: true,
                cidade: true,
                estado: true,
            }
        })
        return response
    }
}

export { ListarUnicoClienteServices }