import prismaClient from "../../prisma";

export class ListarMotoqueiroService {
    async execute(){
        const resposta = await prismaClient.motoqueiro.findMany({})
        return resposta
    }
}