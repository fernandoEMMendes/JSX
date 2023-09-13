import prismaClient from "../../prisma";




class ListarProdutosService {
    async execute() {

        const produtos = await prismaClient.products.findMany({})
        return { dados: produtos }
    }
}


export { ListarProdutosService }