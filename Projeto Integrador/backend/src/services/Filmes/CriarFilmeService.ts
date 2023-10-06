import prismaClient from "../../prisma/index"

interface CriarFilme {
    nome: string
    sinopse: string
    lancamento: string
}

class CriarFilmeService {
    async execute({ nome, sinopse, lancamento }: CriarFilme) {
        const response = await prismaClient.films.create({
            data: {
                nome: nome,
                sinopse: sinopse,
                lancamento:lancamento
            },
        })
        return {dados: "Filme criado com sucesso"}
    }
}

export { CriarFilmeService }