import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface CriarMotoqueiro {
    nome: string,
    nusuario: string,
    senha: string
}

export class CriarMotoqueiroService {
    async execute({ nome, nusuario, senha }: CriarMotoqueiro) {
        if (!nome || !nusuario || !senha) {
            throw new Error("Existem campos em branco")
        }

        const motoqueirojacadastrado = await prismaClient.motoqueiro.findFirst({
            where: {
                nome: nome
            }
        })

        if (motoqueirojacadastrado) {
            throw new Error("Motoqueiro já cadastrado")
        }

        const senhaCrypt = await hash(senha, 8)
        await prismaClient.motoqueiro.create({
            data: {
                nome: nome,
                nusuario: nusuario,
                senha: senhaCrypt
            },
            select: {
                id: true,
                nome: true,
                nusuario: true
            }
        })
        return { msg: "Cadastro efetuado com sucesso"}
    }
}