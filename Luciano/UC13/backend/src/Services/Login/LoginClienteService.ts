import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken"

interface loginCliente {
    email: string
    password: string
}

export class LoginClienteService {
    async execute({ email, password }: loginCliente) {
        const cliente = await prismaClient.cliente.findFirst({
            where: {
                email: email
            }
        })
        if (!cliente) {
            throw new Error("Cliente/Senha estão incorretos")
        }

        const autenticado = await compare(password, cliente.senha)
        if (!autenticado) {
            throw new Error("Cliente/Senha estão incorretos")
        }

        const token = sign({
            id: cliente.id,
            email: cliente.email
        },
            process.env.JWT_SECRET,
            {
                subject: cliente.id,
                expiresIn: "4h"
            }
        )
        return {
            id: cliente.id,
            email: cliente.email,
            token: token
        }
    }
}