import { Request, Response } from "express"
import { CriarUsuarioService } from "../../services/Usuario/CriarUsuarioService"

class CriarUsuarioController {
    async handle(req: Request, res: Response) {
        const { nome, senha, email } = req.body
        const criar = new CriarUsuarioService()
        const response = await criar.execute({
            nome,
            senha,
            email
        })
        return res.json(response)
    }
}

export { CriarUsuarioController }