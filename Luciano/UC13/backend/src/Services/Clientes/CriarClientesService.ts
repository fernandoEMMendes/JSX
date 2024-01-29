import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface CriarCliente {
    nome: string
    tel_cel: string
    email: string
    senha: string
    cpf: string
    cep: string
    nMoradia: string
    rua: string
    bairro: string
    cidade: string
}

export class CriarClientesService {
    async execute({ nome, tel_cel, email, senha, cpf, cep, nMoradia, rua, bairro, cidade }: CriarCliente) {

        if (!nome || !tel_cel || !email || !senha || !cpf || !cep || !nMoradia || !rua || !bairro || !cidade) {
            throw new Error("Existem campos em branco")
        }

        const emailExiste = await prismaClient.cliente.findFirst({
            where: {
                email: email
            }
        })
        if (emailExiste) {
            throw new Error("Email já cadastrado")
        }

        const senhaCrypt = await hash(senha, 8)
        const resposta = await prismaClient.cliente.create({
            data: {
                nome: nome,
                tel_cel: tel_cel,
                email: email,
                senha: senhaCrypt,
                cpf: cpf,
                cep: cep,
                nMoradia: nMoradia,
                rua: rua,
                bairro: bairro,
                cidade: cidade
            },
            select: {
                nome: true,
                tel_cel: true,
                email: true,
                senha: true,
                cpf: true,
                cep: true,
                nMoradia: true,
                rua: true,
                bairro: true,
                cidade: true
            }
        })
        return ({ resposta })
    }
}