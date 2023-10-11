import prismaClient from '../../prisma'

interface CriarProdutos {
  nome: string
  fabricante: string
  preco: string
  banner: string
  categoriaId: string
}

class CriarProdutosServices {
  async execute({
    nome,
    fabricante,
    preco,
    banner,
    categoriaId
  }: CriarProdutos) {
    if (!nome || !fabricante || !preco || !banner || !categoriaId) {
      throw new Error('Existem campos em Branco')
    }

    await prismaClient.products.create({
      data: {
        nome: nome,
        fabricante: fabricante,
        preco: preco,
        banner: banner,
        categoriaId: categoriaId
      }
    })
    return { dados: 'Produto Cadastrado com Sucesso' }
  }

}

export { CriarProdutosServices }