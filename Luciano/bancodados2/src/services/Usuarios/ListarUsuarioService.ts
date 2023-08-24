import prismaClient from "../../prisma";




class ListarUsuarioService {
    async execute() {


        const usuario = await prismaClient.user.findMany({})
        return { dados: usuario }
    }
}



export { ListarUsuarioService }