import prismaClient from "../../prisma"



class ListarClienteService {
    async execute() {

        const usuario = await prismaClient.client.findMany({})
        return { dados: usuario }
    }
}



export { ListarClienteService }