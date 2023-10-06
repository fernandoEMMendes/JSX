import prisma from "../../prisma";

interface ListarUnicoFilme {
    filmeId: string
}

class ListarUnicoFilmeService {
    async execute({ filmeId }: ListarUnicoFilme) {
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