import { Request, Response } from "express"
import { CriarUsuarioService } from "../../services/Usuarios/CriarUsuarioService"


class CriarUsuarioController {

    async handle(req: Request, res: Response) {
        const { email, senha } = req.body

        const criarUsuarioService = new CriarUsuarioService()
        const usuarios = await criarUsuarioService.execute({
            email,
            senha
        })
        return res.json(usuarios)
    }
}


export { CriarUsuarioController }