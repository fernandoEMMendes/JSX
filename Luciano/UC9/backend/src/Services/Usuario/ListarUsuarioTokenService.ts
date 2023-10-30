import prisma from "../../prismaClient";

interface Listar {
    tokenId: string
}

export class ListarUsuarioTokenService {
    async execute({ tokenId }: Listar) {

        const response = await prisma.user.findUnique({
            where: {
                id: tokenId
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })

        return response
    }
}