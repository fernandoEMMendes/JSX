import prismaClient from "../../prisma"
import {compare} from "bcryptjs"

interface Login {
    email: string
    password: string
}

class LoginUsuarioServices {
    async execute({ email, password }: Login) {

        const verificar = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!verificar) {
            throw new Error("Usuário ou Senha incorreto(s)")
        }

        const auth = await compare(password, verificar.senha)
        if (!auth) {
            throw new Error("Usuário ou Senha incorreto(s)")
        }
        
       
        return ({ dados: "Dados autenticados com sucesso" })
    }
}

export { LoginUsuarioServices }