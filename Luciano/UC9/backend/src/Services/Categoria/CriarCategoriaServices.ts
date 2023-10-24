import prisma from "../../prismaClient"

interface CriarCategorias {
    nome: string
}

export class CriarCategoriaService {
    async execute({ nome }: CriarCategorias) {
        if (!nome) {
            throw new Error("Campos em brancos não são permitidos")
        }

        const nomeId = await prisma.category.findFirst({
            where: {
                nome: nome
            }
        })
        if (nomeId) {
            throw new Error("Categoria já cadastrado")
        }
        await prisma.category.create({
            data: {
                nome: nome
            }
        })
        return { dados: "Categoria criado com sucesso" }
    }
}