import prisma from "../../prisma";

interface ListarUnico {
    filmeId: string
}

class ListarUnicoFilmeService {
    async execute({ filmeId }: ListarUnico) {
        const response = await prisma.films.findUnique({
            where: {
                id: filmeId
            },
            select: {
                nome: true,
                sinopse: true,
                lancamento: true
            }
        })
        return response
    }
}

export { ListarUnicoFilmeService }