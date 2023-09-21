import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'

interface AuthLogin{
    email: string
    password: string
}

class AuthUsuarioServices{
    async execute({ email, password }: AuthLogin){

        const usuario = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(!usuario){
            throw new Error('Usuário/Senha Incorretos')
        }
        const autenticado = await compare(password, usuario.senha)
        if(!autenticado){
            throw new Error('Usuário/Senha Incorretos')
        }
        
        return ({dados: 'Autenticação Com Sucesso'})
        
    }
}

export { AuthUsuarioServices }