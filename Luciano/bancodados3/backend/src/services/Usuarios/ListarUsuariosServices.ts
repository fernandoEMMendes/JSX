import prismaClient from "../../prisma"


class ListarUsuariosServices {
    async execute() {
        const listarUsuarios = await prismaClient.user.findMany({})
        return listarUsuarios
    }
}

export { ListarUsuariosServices }