import prisma from "../../prisma"
import { hash } from "bcryptjs"

interface CriarUsuario {
    nome: string
    senha: string
    email: string
}

class CriarUsuarioService {
    async execute({ nome, senha, email }: CriarUsuario) {
        const crypt = await hash(senha, 8)
        await prisma.user.create({
            data: {
                nome: nome,
                senha: crypt,
                email: email
            },
        })
        return { dados: "Usuario criado com sucesso" }
    }
}

export { CriarUsuarioService }