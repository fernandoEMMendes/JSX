import prisma from "../../prisma";

interface Apagar {
    usuarioId: string
}

class ApagarUsuarioService {
    async execute({ usuarioId }: Apagar) {
        await prisma.user.delete({
            where: {
                id: usuarioId
            }
        })
        return { dados: "Usuario apagado com sucesso" }
    }
}

export { ApagarUsuarioService }