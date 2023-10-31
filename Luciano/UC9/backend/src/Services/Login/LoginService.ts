import prisma from "../../prismaClient";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";

interface Login {
    email: string
    password: string
}

export class LoginService {
    async execute({ email, password }: Login) {
        const usuario = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (!usuario) { throw new Error("Usuário/Senha não encontrados") }

        const auth = await compare(password, usuario.senha)
        if (!auth) { throw new Error("Usuário/Senha não encontrados") }

        const token = sign(
            {
                id: usuario.id,
                email: usuario.email
            },
            process.env.JWT_KEY,
            {
                subject: usuario.id,
                expiresIn: 10
            }
        )
            return {
                id: usuario.id,
                email: usuario.email,
                token: token
            }
    }
}