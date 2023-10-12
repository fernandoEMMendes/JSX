import prisma from "../../prisma"
import { hash } from "bcryptjs"

interface Criar {
    nome: string
    email: string
    senha: string
}

class CriarUsuarioService {
    async execute({ nome, email, senha }: Criar) {

        if (!nome || !email || !senha) {
            throw new Error("Campos obrigatórios em branco!")
        }

        const verificarEmail = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if (verificarEmail) {
            throw new Error("Email já cadastrado!")
        }

        const senhaCrypt = await hash(senha, 8)
        await prisma.user.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCrypt
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })
        return { dados: "Usuario criado com sucesso" }
    }
}

export { CriarUsuarioService }