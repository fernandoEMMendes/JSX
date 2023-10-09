import prisma from "../../prisma";

interface Alterar {
    usuarioId: string
    novoNome: string
    novoEmail: string
}

class AlterarUsuarioService {
    async execute({usuarioId, novoNome, novoEmail}:Alterar){
        await prisma.user.update({
            where: {
                id: usuarioId
            },
            data: {
                nome: novoNome,
                email: novoEmail
            }
        })
        return {dados: "Usuario alterado com sucesso"}
    }
}

export {AlterarUsuarioService}