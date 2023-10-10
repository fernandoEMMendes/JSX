import prisma from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthLogin{
    email: string
    password: string
}

class AuthUsuarioServices{
    async execute({ email, password }: AuthLogin){
        const usuario = await prisma.user.findFirst({
            where:{
                email: email
            }
        })

        const autenticado = await compare(password, usuario.senha)
        if(!autenticado){
            throw new Error('Usuário/Senha Incorretos')
        }
        
        const token = sign(
            {
                id: usuario.id,
                email: usuario.email
            },
            
            //KEY_JWT é a chave codificada que fica no .env
            process.env.KEY_JWT,
            
            {
                subject: usuario.id,
                expiresIn: "3h"
            }
        )

        
          
        return {
            id: usuario.id,
            email: usuario.email,
            token: token
        }
    }
}

export { AuthUsuarioServices }