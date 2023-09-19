import prismaClient from "../../prisma";

interface AlterarUsuario {
    id: string
    NovoNome: string
    NovoEmail: string
}

class AlterarUsuarioServices {
    async execute({ id, NovoNome, NovoEmail }: AlterarUsuario) {

        await prismaClient.user.update({
            where: {
                id: id
            },
            data: {
                nome: NovoNome,
                email: NovoEmail
            }
        })
        return { dados: "Dados Alterados com Sucesso" }
    }
}

export { AlterarUsuarioServices }