import prismaClient from "../../prisma";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";

interface Login {
    nusuario: string,
    password: string
}

export class LoginMotoqueiroService {
    async execute({ nusuario, password }: Login) {
        const motoqueiro = await prismaClient.motoqueiro.findFirst({
            where: {
                nusuario: nusuario
            }
        })
        if (!motoqueiro) {
            throw new Error("Login/Senha estão incorretos")
        }

        const autenticado = await compare(password, motoqueiro.senha)
        if (!autenticado) {
            throw new Error("Login/Senha estão incorretas")
        }

        const token = sign({
            id: motoqueiro.id,
            nusuario: motoqueiro.nusuario
        },
            process.env.JWT_SECRET,
            {
                subject: motoqueiro.id,
                expiresIn: "24h"
            }
        )
        return {
            id: motoqueiro. id,
            nusuario: motoqueiro.nome,
            token: token
        }
    }
}