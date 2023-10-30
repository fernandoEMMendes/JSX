import prisma from "../../prismaClient";

interface Listar {}

export class ListarUsuarioTokenService {
    async execute(){
        const subVerify = await prisma.user.findFirst({

        })
    }
}