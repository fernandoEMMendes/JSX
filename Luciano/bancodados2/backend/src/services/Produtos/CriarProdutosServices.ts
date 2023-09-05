import prismaClient from '../../prisma'

interface CriarProdutos{
    nome: string
    fabricante: string
    preco: string
}

class CriarProdutosServices{
    async execute({
        nome,
        fabricante,
        preco
    }: CriarProdutos){
      if(!nome || !fabricante || !preco){
        throw new Error('Existem campos em Branco')
      }

        await prismaClient.products.create({
          data:{
            nome: nome,
            fabricante: fabricante,
            preco: preco
          }  
        })
        return {dados: 'Produto Cadastrado com Sucesso'}
    }

}

export { CriarProdutosServices }