import prismaClient from "../../prisma";

class ListarCategoriaService {
    async execute() {
        const categorias = await prismaClient.categories.findMany({})
        return categorias
    }
}

export { ListarCategoriaService }