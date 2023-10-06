import prisma from "../../prisma";

interface ApagarFilme {
    filmeId: string
}

class ApagarFilmeService {
    async execute({ filmeId }: ApagarFilme) {
        await prisma.films.delete({
            where: {
                id: filmeId
            }
        })
        return { dados: "Filme apagado com sucesso" }
    }
}

export { ApagarFilmeService }