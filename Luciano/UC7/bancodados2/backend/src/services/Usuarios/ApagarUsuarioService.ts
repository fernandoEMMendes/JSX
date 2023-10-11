import prismaClient from "../../prisma"


interface ApagarUsuario {
    remove: string
}

class ApagarUsuarioServices {

    async execute({ remove }: ApagarUsuario) {

        await prismaClient.user.delete({
            where: {
                id: remove
            }
        })
        return { dados: "apagado com sucesso" }
    }
}

export { ApagarUsuarioServices }