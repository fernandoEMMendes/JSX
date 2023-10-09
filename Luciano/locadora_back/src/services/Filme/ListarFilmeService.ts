import prisma from "../../prisma"

class ListarFilmeService {
    async execute() {
        const response = await prisma.films.findMany({})
        return response
    }
}

export { ListarFilmeService }