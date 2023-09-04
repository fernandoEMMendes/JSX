import prismaClient from '../../prisma'

interface CriarProdutos{
    nome: string
    fabricante: string
    quantidade: string
    preco: string
}

class CriarProdutosServices{
    async execute({
        nome,
        fabricante,
        quantidade,
        preco
    }: CriarProdutos){
      if(!nome || !fabricante || !quantidade || !preco){
        throw new Error('Existem campos em Branco')
      }

        await prismaClient.produtos.create({
          data:{
            nome: nome,
            fabricante: fabricante,
            quantidade: quantidade,
            preco: preco
          }  
        })
        return {dados: 'Produto Cadastrado com Sucesso'}
    }

}

export { CriarProdutosServices }