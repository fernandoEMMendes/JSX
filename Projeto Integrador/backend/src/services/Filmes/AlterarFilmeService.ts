import prisma from "../../prisma/index"

interface AlterarFilme {
    filmeId: string
    novoNome: string
    novoSinopse: string
    novoLancamento: string
}

class AlterarFilmeService {
    async execute({ filmeId, novoNome, novoSinopse, novoLancamento }: AlterarFilme) {

        await prisma.films.update({
            where: {
                id: filmeId
            },
            data: {
                nome: novoNome,
                sinopse: novoSinopse,
                lancamento: novoLancamento
            }
        })
        return { dados: "Filme alterado com sucesso" }
    }
}

export { AlterarFilmeService }