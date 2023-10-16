import prisma from "../../prismaClient/index"
import { hash } from "bcryptjs"

interface Criar {
    nome: string
    email: string
    password: string
}

export class CriarUsuarioService {
    async execute({ nome, email, password }: Criar) {
        if (!nome || !email || !password) { throw new Error("Campos obrigatórios não preenchidos") }
        const verificarEmail = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (verificarEmail) { throw new Error("Email já cadastrado") }
        const passwordCrypt = await hash(password, 8)
        const response = await prisma.user.create({
            data: {
                nome: nome,
                email: email,
                senha: passwordCrypt
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })
        return response
    }
}