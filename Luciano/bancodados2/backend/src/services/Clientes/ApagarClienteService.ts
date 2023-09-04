import prismaClient from "../../prisma"



interface ApagarUsuario {
    remove: string
}


class ApagarClienteService {
    async execute({ remove }: ApagarUsuario) {

        await prismaClient.client.delete({
            where: {
                id: remove
            }
        })
        return { dados: "apagado com sucesso" }
    }
}

export { ApagarClienteService }