import prisma from "../../prisma"

class ListarFilmeService {
    async execute() {

        const filmes = await prisma.films.findMany({})
        return filmes
    }
}

export { ListarFilmeService }