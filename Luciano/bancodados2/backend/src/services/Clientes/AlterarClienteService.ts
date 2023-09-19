import prismaClient from "../../prisma";

interface AlterarCliente {
    id: string
    NovoNome: string
    NovoTelefone: string
    NovoRua: string
    NovoCasa: string
    NovoComplemento: string
    NovoBairro: string
    NovoCidade: string
    NovoEstado: string
}

class AlterarClienteServices {
    async execute({ id, NovoNome, NovoTelefone, NovoRua, NovoCasa, NovoComplemento, NovoBairro, NovoCidade, NovoEstado }: AlterarCliente) {

        await prismaClient.client.update({
            where: {
                id: id
            },
            data: {
                nome: NovoNome,
                telefone: NovoTelefone,
                rua: NovoRua,
                casa: NovoCasa,
                complemento: NovoComplemento,
                bairro: NovoBairro,
                cidade: NovoCidade,
                estado: NovoEstado
            }
        })
        return { dados: "Dados Alterados com Sucesso" }
    }
}

export { AlterarClienteServices }