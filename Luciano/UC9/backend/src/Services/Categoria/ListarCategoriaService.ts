import prisma from "../../prismaClient";

export class ListarCategoriaService {
    async execute() {
        const categorias = await prisma.category.findMany({})
        return categorias
    }
}