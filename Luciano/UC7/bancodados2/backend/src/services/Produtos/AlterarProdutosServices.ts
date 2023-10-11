import prismaClient from "../../prisma";

interface AlterarProdutos {
    id: string
    NovoNome: string
    NovoFabricante: string
    NovoPreco: string
}

class AlterarProdutosServices {
    async execute({ id, NovoNome, NovoFabricante, NovoPreco }: AlterarProdutos) {

        await prismaClient.products.update({
            where: {
                id: id
            },
            data: {
                nome: NovoNome,
                fabricante: NovoFabricante,
                preco: NovoPreco
            }
        })
        return { dados: "Dados Alterados com Sucesso" }
    }
}

export { AlterarProdutosServices }