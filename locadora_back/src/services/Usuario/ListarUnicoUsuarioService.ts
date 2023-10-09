import prisma from "../../prisma";

interface ListarUnico {
    usuarioId: string
}

class ListarUnicoUsuarioService {
    async execute({ usuarioId }: ListarUnico) {
        const response = await prisma.user.findUnique({
            where: {
                id: usuarioId
            },
            select: {
                nome: true,
                email: true
            }
        })
        return response
    }
}

export { ListarUnicoUsuarioService }