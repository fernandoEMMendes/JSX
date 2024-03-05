import prismaClient from "../../prisma";

export class ListarClientesService {
    async execute() {
        const resposta = await prismaClient.cliente.findMany({})
        return resposta
    }
}