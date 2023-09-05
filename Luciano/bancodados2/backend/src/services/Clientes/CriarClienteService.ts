import prismaClient from "../../prisma";


interface CriarCliente {
    nome: string
    cpf_cnpj: string
    rg_ie: string
    telefone: string
    rua: string
    casa: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
}

class CriarClienteService {
    async execute({ nome, cpf_cnpj, rg_ie, telefone, rua, casa, complemento, bairro, cidade, estado }: CriarCliente) {
        if (!nome || !cpf_cnpj || !rg_ie || !telefone || !rua || !casa || !bairro || !cidade || !estado)
            throw new Error("Campos em brancos!")

        const cpfJaCadastrado = await prismaClient.client.findFirst({
            where: {
                OR: [
                    { cpf_cnpj: { endsWith: cpf_cnpj } },
                    { rg_ie: { endsWith: rg_ie } }
                ]
            }
        })

        if (cpfJaCadastrado) {
            throw new Error("CPF/CNPJ ou RG/IE já cadastrado")
        }

        const cliente = await prismaClient.client.create({
            data: {
                nome: nome,
                cpf_cnpj: cpf_cnpj,
                rg_ie: rg_ie,
                telefone: telefone,
                rua: rua,
                casa: casa,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            },
            select: {
                nome: true,
                cpf_cnpj: true,
                rg_ie: true,
                telefone: true,
                rua: true,
                casa: true,
                complemento: true,
                bairro: true,
                cidade: true,
                estado: true
            }
        })
        return { dados: cliente }
    }
}



export { CriarClienteService }