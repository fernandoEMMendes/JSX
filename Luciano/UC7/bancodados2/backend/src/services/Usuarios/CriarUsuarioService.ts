import { hash } from "bcryptjs"
import prismaClient from "../../prisma"


interface CriarUsuario {
    nome: string
    email: string
    senha: string
}

class CriarUsuarioService {
    async execute({ nome, email, senha }: CriarUsuario) {
        if (!nome || !email || !senha)
            throw new Error("Há campos em brancos!")

        const emailJaCadastrado = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (emailJaCadastrado) {
            throw new Error("E-mail já cadastrado!")
        }

        const senhaCrypt = await hash(senha, 8)
        const usuario = await prismaClient.user.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCrypt
            },
            select: {
                id: true,
                email: true
            }
        })
        return { dados: usuario }
    }
}


export { CriarUsuarioService }