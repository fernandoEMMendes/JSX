import prismaClient from "../../prisma";

interface SelecionarCliente {
    escolher: string
}

class ListarClienteUnicoServices {
    async execute({ escolher }: SelecionarCliente) {
        const cliente = await prismaClient.client.findMany({
            where: {
                id: escolher
            }
        })
        return { dados: cliente }
    }
}

export { ListarClienteUnicoServices }