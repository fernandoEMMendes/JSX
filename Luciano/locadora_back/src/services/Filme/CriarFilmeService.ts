import prismaClient from "../../prisma/index"

interface Criar {
    nome: string
    sinopse: string
    lancamento: string
}

class CriarFilmeService {
    async execute({ nome, sinopse, lancamento }: Criar) {
        await prismaClient.films.create({
            data: {
                nome: nome,
                sinopse: sinopse,
                lancamento: lancamento
            },
        })
        return { dados: "Filme criado com sucesso" }
    }
}

export { CriarFilmeService }