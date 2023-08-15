import prismaClient from "../../prisma";


interface CriarCliente {
    nome: string
    cpf: string
    cel_tel: string
    cel_fixo: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
}

class CriarClienteService {
    async execute({ nome, cpf, cel_tel, cel_fixo, rua, numero, complemento, bairro, cidade, estado }: CriarCliente) {
        if (!nome || !cpf || !cel_tel || !rua || !numero || !bairro || !cidade || !estado)
            throw new Error("Campos em brancos!")

        const cpfJaCadastrado = await prismaClient.client.findFirst({
            where: {
                cpf: cpf
            }
        })

        if (cpfJaCadastrado) {
            throw new Error("CPF já cadastrado")
        }

        const cliente = await prismaClient.client.create({
            data: {
                nome: nome,
                cpf: cpf,
                cel_tel: cel_tel,
                cel_fixo: cel_fixo,
                rua: rua,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            },
            select: {
                nome: true,
                cpf: true,
                cel_tel: true,
                cel_fixo: true,
                rua: true,
                numero: true,
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