import prismaClient from '../../prisma'

interface CriarProdutos {
  nome: string
  fabricante: string
  preco: string
  banner: string
}

class CriarProdutosServices {
  async execute({
    nome,
    fabricante,
    preco,
    banner
  }: CriarProdutos) {
    if (!nome || !fabricante || !preco || !banner) {
      throw new Error('Existem campos em Branco')
    }

    await prismaClient.products.create({
      data: {
        nome: nome,
        fabricante: fabricante,
        preco: preco,
        banner: banner
      }
    })
    return { dados: 'Produto Cadastrado com Sucesso' }
  }

}

export { CriarProdutosServices }