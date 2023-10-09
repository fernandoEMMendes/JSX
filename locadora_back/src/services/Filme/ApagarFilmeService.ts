import prisma from "../../prisma";

interface Apagar {
    filmeId: string
}

class ApagarFilmeService {
    async execute({ filmeId }: Apagar) {
        await prisma.films.delete({
            where: {
                id: filmeId
            }
        })
        return { dados: "Filme apagado com sucesso" }
    }
}

export { ApagarFilmeService }