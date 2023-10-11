import prisma from "../../prisma";

class ListarUsuarioService {
    async execute() {
        const response = await prisma.user.findMany({})
        return response
    }
}

export {ListarUsuarioService}