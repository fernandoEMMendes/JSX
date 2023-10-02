import prismaClient from "../../prisma";

interface CriarCategoria {
    nome: string
}


class CriarCategoriaService {
    async execute({ nome }: CriarCategoria) {

        await prismaClient.categories.create({
            data: {
                nome: nome
            },
            select: {
                nome: true
            }
        })
        return {dados: "Categoria Cadastrada com Sucesso"}
    }
}

export { CriarCategoriaService }